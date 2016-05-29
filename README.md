# online_booking

cd to online_booking_online

run bundle install

run rake db:migrate

run rake:db seed

run app at localhost:30000

(note : vagrant was created for me to run the app in a clean box )

for test:

run  rake db:create RAILS_ENV=test

run  rake db:schema:load RAILS_ENV=test

run rake db:test:prepare 

now run 
rake test test/models/booking_test.rb // test the booking for validating duplicate bookings and max subscription

