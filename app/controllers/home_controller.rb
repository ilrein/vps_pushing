class HomeController < ApplicationController
  def index
    @designs = Design.all
    @design = Design.first
  end
end
