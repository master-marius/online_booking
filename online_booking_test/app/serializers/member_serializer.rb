class MemberSerializer < ActiveModel::Serializer
  attributes :id, :email, :has_completed_first_login
end
