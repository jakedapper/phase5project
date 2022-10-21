u1 = User.create(name: "ACDC", manager_band: "band", username: "acdc", password: "rocknroll")
u2 = User.create(name: "Lizard Man", manager_band: "band", username: "lizardman", password: "1234")
u3 = User.create(name: "Jason", manager_band: "manager", username: "managerjason", password: "1234")

t1 = Tour.create(user_id: u1.id)
t2 = Tour.create(user_id: u2.id)

c1 = City.create!(name: "Chicago")
c2 = City.create!(name: "LA")
c3 = City.create!(name: "Tempe")
c4 = City.create!(name: "Akron")
c5 = City.create!(name: "Annapolis")
c6 = City.create!(name: "Austin")
c7 = City.create!(name: "Waco")

v1 = Venue.create(name: "Hideout Theater", address:"1354 W Wabansia Ave, Chicago, IL 60642", city_id: c1.id, lat:41.913872, lng:-87.662178)
v2 = Venue.create(name: "Troubadour", address:"9081 N Santa Monica Blvd, West Hollywood, CA 90069", city_id: c2.id, lat:34.081402, lng:-118.389503)
v3 = Venue.create(name: "Marquee Theatre", address: "730 N Mill Ave, Tempe, AZ 85281", city_id: c3.id, lat:33.436939, lng:-111.943901)
v4 = Venue.create(name: "Jilly's Music Room", address: "111 N Main St, Akron, OH 44308", city_id: c4.id, lat:41.088060, lng:-81.515300)
v5 = Venue.create(name: "Rams Head On Stage", address:"33 West St, Annapolis, MD 21401", city_id: c5.id, lat:38.978180, lng:-76.494537)
v6 = Venue.create(name: "Hole in the Wall", address:"2538 Guadalupe St, Austin, TX 78705", city_id:c6.id, lat:30.290052, lng:-97.741614)
v7 = Venue.create(name:"Waco Hippodrome Theater", address:"724 Austin Ave, Waco, TX 76701", city_id:c7.id, lat:31.554474, lng:-97.133933)

s1 = Show.create(date:"1/1/2023", doors_time: "7pm", soundcheck_time: "6pm", set_time:"10pm", city_id:c1.id, tour_id:t1.id, venue_id:v1.id, user_id:1)
s2 = Show.create(date:"2/5/2023", doors_time: "8pm", soundcheck_time: "6pm", set_time:"10pm", city_id:c2.id, tour_id:t1.id, venue_id:v2.id, user_id:1) 
s3 = Show.create(date: "3/9/2023", doors_time:"8pm", soundcheck_time: "6pm", set_time:"10pm", city_id:c3.id, tour_id:t1.id, venue_id:v3.id, user_id:1)
s4 = Show.create(date:"3/10/2023", doors_time:"9pm", soundcheck_time: "6pm", set_time:"10pm", city_id:c4.id, tour_id:t1.id, venue_id:v4.id, user_id:1)

s5 = Show.create(date: "4/2/2023", doors_time:"7pm", soundcheck_time: "6pm", set_time:"10pm", city_id: c1.id, tour_id:t2.id, venue_id:v1.id, user_id: 2)
s6 = Show.create(date: "4/3/2023", doors_time:"8pm", soundcheck_time: "6pm", set_time:"10pm", city_id: c5.id, tour_id:t2.id, venue_id:v5.id, user_id: 2)
s7 = Show.create(date: "4/6/2023", doors_time:"9pm", soundcheck_time: "6pm", set_time:"10pm", city_id: c6.id, tour_id:t2.id, venue_id:v6.id, user_id: 2)
s8 = Show.create(date: "4/10/2023", doors_time:"8pm", soundcheck_time: "6pm", set_time:"10pm", city_id: c7.id, tour_id:t2.id, venue_id:v7.id, user_id: 2)


r1 = Review.create(greenroom_rating:1, sound_engineer_rating:4, merch_cut:"15%", comments:"really cool room - sounnds way different with people inside of it", venue_id: v2.id, user_id:u1.id)
r2 = Review.create(greenroom_rating:5, sound_engineer_rating:4, merch_cut:"15%", comments:"really cool room - sounnds way different with people inside of it", venue_id: v1.id, user_id:u1.id)
r3 = Review.create(greenroom_rating:3, sound_engineer_rating:2, merch_cut:"15%", comments:"really cool room - sounnds way different with people inside of it", venue_id: v5.id, user_id:u2.id)
r4 = Review.create(greenroom_rating:2, sound_engineer_rating:5, merch_cut:"15%", comments:"really cool room - sounnds way different with people inside of it", venue_id: v6.id, user_id:u2.id)

