# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.find_by(email: "travis@example.com")

10.times do |x|
  Post.create(
    title: "Title ##{x+1}",
    body: "Body ##{x+1} so let me type some random text here that somewhat resembles a blog post of sorts.",
    user_id: user.id
  )

  puts "Created #{x + 1} posts" if x == 9
end