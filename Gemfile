source 'https://rubygems.org'

# Force HTTPS for github-source gems.
# This is a temporary workaround - remove when bundler version is >=2.0
# @see https://github.com/bundler/bundler/issues/4978
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
gem 'rails-controller-testing'

# Compile Sprockets assets concurrently in `assets:precompile`.
# Ref: https://github.com/rails/sprockets/pull/469
gem 'sprockets', github: 'wjordan/sprockets', ref: 'concurrent_asset_bundle_3.x'
gem 'sprockets-rails'

# provide `respond_to` methods
# (see: http://guides.rubyonrails.org/4_2_release_notes.html#respond-with-class-level-respond-to)
gem 'responders', '~> 2.0'

gem 'sinatra', '~> 2.0.0.beta2', require: 'sinatra/base'

gem 'mysql2', '~> 0.3.13'
# Ref: https://github.com/bdurand/seamless_database_pool/issues/38
# Ref: https://github.com/bdurand/seamless_database_pool/pull/39
gem 'seamless_database_pool', github: 'wjordan/seamless_database_pool', ref: 'cdo'

gem 'dalli' # memcached
gem 'google_drive', '~> 1.0.0'
gem 'le', '~> 2.2'
gem 'os'
gem 'parallel'
gem 'redis', '~> 3.3.1'
# Using commit ref until maintainer publishes a new version
# Ref: https://github.com/cheald/redis-slave-read/pull/2
gem 'redis-slave-read', require: false, github: 'cheald/redis-slave-read', ref: '370d5da2b71f795d8145fcf89c0648f866a125a6'

gem 'google-api-client'

gem 'crowdin-cli'

# CSRF protection for Sinatra.
gem 'rack_csrf'

group :development do
  gem 'annotate'
  gem 'rack-mini-profiler'
  gem 'ruby-progressbar', require: false
  gem 'thin'
  gem 'web-console'
end

group :development, :test do
  gem 'rack-cache'
  gem 'rerun', '~> 0.10.0'
  gem 'shotgun'
  # Use debugger
  #gem 'debugger' unless ENV['RM_INFO']

  gem 'active_record_query_trace'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'haml-rails' # haml (instead of erb) generators
  gem 'ruby-prof'
  gem 'vcr', require: false
  # For unit testing.
  gem 'webmock', require: false

  gem 'codecov', require: false
  gem 'coveralls', require: false # test coverage; https://coveralls.zendesk.com/hc/en-us/articles/201769485-Ruby-Rails
  gem 'fake_sqs'
  gem 'fakeredis', require: false
  gem 'mocha', require: false
  gem 'simplecov', '~> 0.9', require: false
  gem 'sqlite3'
  gem 'timecop'

  # For UI testing.
  gem 'chromedriver-helper', '~> 0.0.7'
  gem 'colorize'
  gem 'cucumber', '~> 2.0.2'
  gem 'eyes_selenium', '~> 2.38.0'
  gem 'minitest', '~> 5.5'
  gem 'minitest-around'
  gem 'minitest-reporters'
  gem 'net-http-persistent'
  gem 'rspec'
  gem 'selenium-webdriver', '~> 3.0.3'
  gem 'spring'
  gem 'spring-commands-testunit'

  # For pegasus PDF generation / merging testing.
  gem 'parallel_tests'
  gem 'pdf-reader', require: false
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Needed for unit testing, and also for /rails/mailers email previews.
gem 'factory_girl_rails', group: [:development, :staging, :test, :adhoc]

# For pegasus PDF generation.
gem 'open_uri_redirections', require: false, group: [:development, :staging, :test]

gem 'unicorn', '~> 5.1.0'

gem 'chronic', '~> 0.10.2'

# Use SCSS for stylesheets.
# Ref: https://github.com/rails/sass-rails/pull/386
gem 'sass-rails', github: 'wjordan/sass-rails', ref: 'frozen-array-fix'

# Use Uglifier as compressor for JavaScript assets.
gem 'uglifier', '>= 1.3.0'

# Use jquery as the JavaScript library.
gem 'jquery-rails'

gem 'phantomjs', '~> 1.9.7.1'

# For emoji in utility output.
gem 'gemoji'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# Authentication and permissions.
gem 'cancancan', '~> 1.15.0'
gem 'devise'
gem 'devise_invitable', '~> 1.6.0'

# Ref: https://github.com/instructure/ims-lti/pull/90
gem 'ims-lti', github: 'wjordan/ims-lti', ref: 'oauth_051'
# Ref: https://github.com/Clever/omniauth-clever/pull/7
gem 'omniauth-clever', '~> 1.2.1', github: 'Clever/omniauth-clever'
gem 'omniauth-facebook', '~> 4.0.0.rc1'
gem 'omniauth-google-oauth2', '~> 0.3.1'
# Ref: https://github.com/joel/omniauth-windowslive/pull/16
# Ref: https://github.com/joel/omniauth-windowslive/pull/17
gem 'omniauth-windowslive', '~> 0.0.11', github: 'wjordan/omniauth-windowslive', ref: 'cdo'

gem 'bootstrap-sass', '~> 2.3.2.2'
gem 'haml'

gem 'jquery-ui-rails', '~> 5.0.3'

gem 'nokogiri', '~> 1.6.1'

gem 'highline', '~> 1.6.21'

gem 'honeybadger' # error monitoring

gem 'newrelic_rpm', '~> 3.16.0', group: [:staging, :development, :production] # perf/error/etc monitoring

gem 'redcarpet', '~> 3.3.4'

# Ref: https://github.com/alexreisner/geocoder/pull/1085 (pending new RubyGems release)
gem 'geocoder', github: 'wjordan/geocoder', ref: 'rack-request-fix'

gem 'mini_magick'
gem 'rmagick'

gem 'acts_as_list'

gem 'kaminari' # pagination

gem 'stringex', '~> 2.5.2' # Provides String.to_ascii

gem 'naturally' # for sorting string naturally

gem 'retryable' # retry code blocks when they throw exceptions

# Used by a build script.
gem 'execjs'
gem 'therubyracer', '~> 0.12.2', platforms: :ruby

gem 'jwt' # single signon for zendesk

gem 'codemirror-rails' # edit code in textarea
gem 'marked-rails' # js-based md renderer used for levelbuilder md preview

gem 'twilio-ruby' # SMS API for send-to-phone feature

gem 'font-awesome-rails', '~> 4.6.3'
gem 'sequel', '~> 4.10'
gem 'user_agent_parser'

gem "paranoia", "~> 2.2.0.pre" # 'delete' Rails model objects by setting a deleted_at column instead of deleting the row

# JSON model serializer for REST APIs.
gem 'active_model_serializers', github: 'rails-api/active_model_serializers', ref: '2962f3f64e7c672bfb5a13a8f739b5db073e5473'
gem 'aws-sdk', '~> 2'

# Lint tools
group :development, :staging do
  gem 'haml_lint', require: false
  gem 'rubocop', '0.46.0', require: false
  gem 'scss_lint', require: false
end

# Reduce volume of production logs
gem 'lograge'

# Enforce SSL
gem 'rack-ssl-enforcer'

# PubSub for NetSim
gem 'pusher', '~> 1.3.0', require: false

gem 'youtube-dl.rb', group: [:development, :staging, :levelbuilder]

gem 'daemons'
gem 'httparty'
gem 'net-scp'
gem 'net-ssh'
gem 'oj'

gem 'rest-client', '~> 2.0'

gem 'rack-attack', '~> 4.4'

# Generate SSL certificates.
gem 'acmesmith'

gem 'addressable'
gem 'bcrypt'
gem 'firebase'
gem 'firebase_token_generator'
gem 'selectize-rails'
gem 'sshkit'
gem 'validates_email_format_of'

gem 'composite_primary_keys'

# GitHub API; used by the DotD script to automatically create new
# releases on deploy
gem 'octokit'

# Used to create a prefix trie of student names within a section
gem 'full-name-splitter', github: 'pahanix/full-name-splitter'
gem 'rambling-trie'

gem 'omniauth-openid-connect', github: 'wjordan/omniauth-openid-connect', ref: 'cdo'

# Install image-optim tools in all non-development environments.
group :staging, :test, :production, :adhoc, :levelbuilder do
  gem 'image_compressor_pack', github: 'wjordan/image_compressor_pack', ref: 'cdo'
  gem 'image_optim', github: 'wjordan/image_optim', ref: 'guetzli'
  gem 'image_optim_rails'
end
