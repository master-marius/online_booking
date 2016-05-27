class DashboardController < ApplicationController
  before_filter :current_member

  def index
    
  end

  protected

  def current_member
    @current_member = warden.authenticate(:scope => :member)
  end
end
