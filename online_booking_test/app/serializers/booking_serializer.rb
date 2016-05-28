class BookingSerializer < ActiveModel::Serializer
  attributes :id, :schedule, :member, :lesson 
  
end
