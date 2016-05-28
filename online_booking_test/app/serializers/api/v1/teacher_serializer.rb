class Api::V1::TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :nationality
  
end
