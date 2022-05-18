#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)/.."

HEROKU_APP=caashapp-backend

# heroku autocomplete setup
# shellcheck disable=SC1090
HEROKU_AC_BASH_SETUP_PATH="$HOME/.cache/heroku/autocomplete/bash_setup" &&
    test -f $HEROKU_AC_BASH_SETUP_PATH &&
    source $HEROKU_AC_BASH_SETUP_PATH;

# Get postgres connection URL from heroku
get_pg_connection() {
    ! hash heroku 2>/dev/null && return 0
    heroku pg:credentials:url DATABASE "$@" 2>/dev/null |
        awk '
BEGIN { good = 0 }
/^Connection URL/ { good = 1; next }
good == 1 { print $1; exit }
'
}

# Notes on migrating
# https://github.com/prisma/prisma/issues/4571#issuecomment-747496127
# 1. change .env => localhost db
# 2. delete migrations folder
# 3. migrate
# 4. change .env => heroku db
# 5. npx prisma migrate resolve --applied "<migration_name>" --preview-feature
deploy() {
    # docker-compose -f "$DIR/Dockerfile" build &&
    heroku container:login &&
        heroku container:push web --app "$HEROKU_APP" &&
        heroku container:release web --app "$HEROKU_APP"
}
