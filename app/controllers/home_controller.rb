class HomeController < ApplicationController
  
  def home
    @cards = Card.all

  end

  def index
    @designs = Design.all
  end
end
