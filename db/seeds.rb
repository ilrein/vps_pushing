cards = Card.all

cards.each do |card| 
  card.destroy!
end

linux = Card.create!(
  header: "Linux",
  description: "Expertise with virtual private servers, running off SSDs",
  extra:"We're Ubuntu lovers here"
  )

ror = Card.create!(
  header: "Ruby on Rails",
  description: "Experience with Rails 4.0, as a backend for robust, data-driven, JSON loving applications.",
  extra:"We're Ubuntu lovers here"
  )

