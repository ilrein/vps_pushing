class HomeController < ApplicationController
  
  def home
    
  end

  def index
    @designs = Design.all
    @design = Design.first
  end
end
