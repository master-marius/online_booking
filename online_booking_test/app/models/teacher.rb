class Teacher < ActiveRecord::Base

  def self.search(keyword)
    gender = "like"
    key = "%#{keyword}%"

    if keyword == 'male'
      gender = '='
      key = "#{keyword}"
    end

    return self.where("teachers.name LIKE ? OR teachers.gender "+gender+" ? OR teachers.nationality LIKE ?", "%#{keyword}%", key, "%#{keyword}%")
  end
end
