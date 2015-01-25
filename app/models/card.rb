class Card < ActiveRecord::Base

scope :dynamic, ~> Card.all(limit: 2)

  def high
      "high"
  end
  def low
      "low"
  end
end
