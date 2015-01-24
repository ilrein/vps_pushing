
def _all(models, option = nil)
  if option = "save"
    models.each { |e| e.save! }  
  end
  if option = "destroy"
    models.each { |e| e.destroy }  
  end
  if nil
    puts "enter save or destroy"
  end
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

_all(Card.all, "destroy")

models = []

linux = Card.create!(
  header: "Linux",
  description: "Expertise with virtual private servers, running off SSDs",
  extra:"We're Ubuntu lovers here"
  )

models << linux




#_all(models, "save")


