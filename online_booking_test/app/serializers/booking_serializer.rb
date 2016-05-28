class BookingSerializer < ActiveModel::Serializer
  attributes :id, :schedule, :member, :lesson 
  
  has_one  :member, serializer: MemberSerializer
  has_one  :schedule
  has_one  :lesson, serializer: LessonSerializer
end
