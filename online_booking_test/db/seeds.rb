# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

OneLesson = Subscription.create({ name: ' 1 lesson / day', lesson_count: 1})
TwoneLessons = Subscription.create({ name: ' 2 lessons / day', lesson_count: 2})
ThreeLessons = Subscription.create({ name: ' 3 lessons / day', lesson_count: 3})
