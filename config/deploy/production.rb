# server "db.example.com", user: "deploy", roles: %w{db}
server "54.250.100.191", user: "gohsan", roles: %w{app db web}

set :rails_env, "production"
set :unicorn_rack_env, "production"

# role-based syntax
# ==================