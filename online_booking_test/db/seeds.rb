OneLesson = Subscription.create({ name: ' 1 lesson / day', lesson_count: 1})
TwoneLessons = Subscription.create({ name: ' 2 lessons / day', lesson_count: 2})
ThreeLessons = Subscription.create({ name: ' 3 lessons / day', lesson_count: 3})


teacher1 = {
  name: 'Doris Wilson',
  gender: 'female',
  nationality: 'French'
}

teacher2 = {
  name: 'Lois Pagett',
  gender: 'male',
  nationality: 'Danish'
}

teacher3 = {
  name: 'Ruby Partin',
  gender: 'female',
  nationality: 'French'
}

teacher4 = {
  name: 'Henrik Peterson',
  gender: 'male',
  nationality: 'American'
}

teacher5 = {
  name: 'Catherine Clark',
  gender: 'female',
  nationality: 'American'
}

teachers = [teacher1,teacher2,teacher3,teacher4,teacher5]

teachers.each do |teacher|
  t = Teacher.create(teacher)

  date = Time.new.to_date.strftime('%Y-%m-%d')

  sec_interval = 60 * 30  # 60 sec * 30 min
  total_sched_time = 48
  start = 0
  time = 0
  sec = 0

  while start < total_sched_time do
    time = Time.at(sec).utc.strftime("%H:%M")
    sec += sec_interval

    Schedule.create({teacher_id: t.id, date: date, time: time})
    start += 1
  end
end

lessons = [
  { name: 'ENGLISH 11'},
  { name: 'MATH 11'},
  { name: 'WEB PROGRAMMING'},
  { name: 'AUTOMATA'},
  { name: 'HISTORY 201'},
  { name: 'CHEMISTRY 101'},
  { name: 'SOCIAL SCIENCE 11'},
  { name: 'TRIGONOMETRY 11'},
  { name: 'MATRIX ALGEBRA 101'}
]

lessons.each do | lesson|
  Lesson.create(lesson)
end


