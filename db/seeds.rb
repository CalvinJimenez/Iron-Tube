puts "Starting"


Like.destroy_all
Video.destroy_all
User.destroy_all

puts "Destroying seed data AHHHH"

puts "ASSEMBLE"

puts "Seeding new users..."

u1 = User.create(
    
    name: "Calvin",
    username: "CalvinJ",
    email: "CalvinJ@gmail.com",
    password: "444",
    pfp: "https://preview.redd.it/0cd5xc0dw2g51.jpg?width=640&crop=smart&auto=webp&v=enabled&s=c261cffdc1bd13bba7f6a4a1cb712876b20ab1e4"
)

u2 = User.create(
    
    name: "Adam",
    username: "AdamDLR",
    email: "AdamDLR@gmail.com",
    password: "111",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1022px-Vimlogo.svg.png"
)


u3 = User.create(
    
    name: "Brandon",
    username: "BrandonM",
    email: "BrandonM@gmail.com",
    password: "1313",
    pfp: "https://c4.wallpaperflare.com/wallpaper/670/229/280/anime-tengen-toppa-gurren-lagann-simon-tengen-toppa-gurren-lagann-wallpaper-thumb.jpg"
)


u4 = User.create(
    
    name: "Sam",
    username: "SamB",
    email: "SamB@gmail.com",
    password: "777",
    pfp: "https://pfps.gg/assets/pfps/1613-naruto.png"
)

puts"Seeding the VIDEOS WOOOO"

v1 = Video.create(
    title: "Database setup + Routes",
    description: "Setup of a rails database",
    url: "YGIgAQjdqpA",
    thumbnail: "https://img.youtube.com/vi/YGIgAQjdqpA/maxresdefault.jpg",
    view_count: 15483,
    like_number: 356
)

v2 = Video.create(
    title: "Controller logic",
    description: "Setting up some controller logic",
    url: "YXd5SaCFdXM",
    thumbnail: "https://img.youtube.com/vi/YXd5SaCFdXM/maxresdefault.jpg",
    view_count: 205348,
    like_number: 27643
)

v3 = Video.create(
    title: "DOM editing walkthough 2022 10 14 at 8 44 27 AM",
    description: "A walkthrough of Additional Practice: Interacting with the DOM using Events, featuring 101022 east!",
    url: "m-549qr_eTg",
    thumbnail: "https://img.youtube.com/vi/m-549qr_eTg/maxresdefault.jpg",
    view_count: 862514,
    like_number: 93682
)

v4 = Video.create(
    title: "React Build + Review w/Sam🌈💁🏾‍♂️💻⚙️✨10-10Cohort (Part1 - Click Event/Toggle + Starting a Form)",
    description: "Building a React app, working with click events and starting a form",
    url: "6un-Qb_94R0",
    thumbnail: "https://img.youtube.com/vi/6un-Qb_94R0/maxresdefault.jpg",
    view_count: 5322514,
    like_number: 72034
)

v5 = Video.create(
    title: "Theater Work review 2022 11 30 at 8 41 45 AM",
    description: "A review of Active Record & one to many relationships featuring 101022 east!",
    url: "iBzJlZuYjfY",
    thumbnail: "https://img.youtube.com/vi/6un-Qb_94R0/maxresdefault.jpg",
    view_count: 2514,
    like_number: 234
)


puts "Seeding the like counts omg"

Like.create(video_id: v2.id, user_id: u1.id)

Like.create(video_id: v4.id, user_id: u2.id)

Like.create(video_id: v2.id, user_id: u3.id)

Like.create(video_id: v1.id, user_id: u4.id)

Like.create(video_id: v3.id, user_id: u4.id)

Like.create(video_id: v2.id, user_id: u2.id)


puts "Disassemble WOMP ❗❗❗"