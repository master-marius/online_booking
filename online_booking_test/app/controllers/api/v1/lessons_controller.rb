class Api::V1::LessonsController < Api::V1::BaseController

  def show
    lesson = Lesson.find(params[:id])

    render json: lesson
  end

  def index
    lessons = Lesson.all

    render json: lessons
  end
end