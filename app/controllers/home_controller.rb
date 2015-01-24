class HomeController < ApplicationController
  
  def home
    cards = Card.all
    @card = cards.first

  end

  def index
    @designs = Design.all
    @design = Design.first
  end
end
