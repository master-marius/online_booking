class Api::V1::TeachersController < Api::V1::BaseController

  def index
   teachers = Teacher.all

   render json: teachers
  end

  def search
    limit = 2
    page = params[:page].to_i

    page = 1 if page == nil

    if params[:keyword]
      teachers = Teacher.search(params[:keyword])
    else
      teachers = Teacher.all
    end

    count = teachers.size
    offset = ( limit * page ) - limit
    
    pages = count / limit
    pages = pages + 1 if (count % limit) != 0
 
    teachers = teachers.offset(offset).limit(limit).order('id DESC')

    meta = { page: page, total: count, per_page: limit, pages: pages }

    # render json: {
    #   teachers: ActiveModel::ArraySerializer.new(teachers, each_serializer: TeacherSerializer),
    #   meta: meta
    # }
    render json: { teachers: teachers, meta: meta}
  end

  private

  def teacher_params
    params.required(:teacher).permit(
      :name, :gender, :nationality
    )
  end

end