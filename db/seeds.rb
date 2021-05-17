# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Evento.destroy_all

Evento_list = [
  {
    name:'Actividad Con El Club De Leones',
    date:' 21 de Septiembre del 2018',
    location:'Lincoln Hospital',
    picture:'https://i.imgur.com/EgQrVeI.png',
    description:'Primera feria anual de salud de Lincoln Hospital en colaboración con el club de leones ',
    category:'Comunitario'
  },
  {
    name:'Recepción Anual De Tutoría Y Liderazgo Cívico',
    date:'8 de Marzo del 2018',
    location:'88th Street and East End Avenue New York, NY',
    picture:'https://i.imgur.com/TkAi34z.png',
    description:'Recepción anual de tutoría y liderazgo cívico en el mes de la mujer en la mansion Gracie',
    category:'Comunitario'
  },
  {
    name:'XII Congreso Medico Anual Internacional De Lincoln Hospital',
    date:'21 de Mayo del 2017',
    location:'Lincoln Hospital',
    picture:'https://i.imgur.com/eeCLjl6.jpg',
    description:'Nuestra fundadora y presidenta Juana Diaz exponiendo sobre recursos disponibles para tratar la adicción a la nicotina en el XII congreso medico annual internacional de Lincoln Hospital ',
    category:'Conferencia'
  },
  {
    name:'Feria De La Escuela Luis Billiard Ps8 ',
    date:'12 de Septiembre del 2019',
    location:' Luis Billiard Ps8 ',
    picture:'https://i.imgur.com/FE5TNrB.png',
    description:'Nuestra fundadora Juana Diaz con la voluntaria Rosa Flores en la  feria de la escuela Luis Billiard Ps8',
    category:'Comunitario'
  },
  {
    name:'Presentacion En La XI Feria Del Libro En NY',
    date:'21 de Septiembre del 2019',
    location:'230 Broadway New York, New York',
    picture:'https://i.imgur.com/7mQiKsw.png',
    description:'Presentacion del Libro de Nuestra Fundadora en la XI Feria del Libro en NY',
    category:'Comunitario'
  },
  {
    name:'Feria De Salud',
    date:'Junio del 2019',
    location:'Lincoln Hospital',
    picture:'https://i.imgur.com/6niAqZM.png',
    description:'Feria De Salud en el Lincoln Hospital',
    category:'Comunitario'
  },
  {
    name:'Noche De Servicios Para La Comunidad',
    date:'26 de Junio del 2019',
    location:'501 W 165th St, New York, NY 10032',
    picture:'https://i.imgur.com/ZoT1jlP.png',
    description:'Noche de Servicios para la Comunidad',
    category:'Comunitario'
  },
  {
    name:'Las Preocupaciones',
    date:'23 de Marzo del 2018',
    location:'Lincoln Hospital',
    picture:'https://i.imgur.com/LuEJSVP.jpg',  
    description:'Nuestra fundadora Juana Diaz expone sobre las procupaciones de los padres el 23 de Marzo del 2018',
    category:'Conferencia'
  },
  {
    name:'Cambio Del Comportamiento En Niños Desnutridos',
    date:'31 de Mayo del 2018',
    location:'228 East 125th St New York, NY, 10035',
    picture:'https://i.imgur.com/8w1e95w.png',
    description:'Conferencia sobre el cambio del comportamiento en niños desnutridos en Church of Scientology Harlem - Community Center',
    category:'Conferencia'
  },
  {
    name:'Cómo Mejorar La Relación Con Sus Hijos',
    date:'15 de Mayo del 2018',
    location:'268 Wadsworth Avenue New York, NY 10033',
    picture:'https://i.imgur.com/Nd7yLEn.jpg',
    description:'Una sesión informativa sobre cómo mejorar la relación con sus hijos en St. Elizabeth Catholic Church',
    category:'Conferencia'
  },
  
  {
    name:'Primer Simposio Nacional Sobre Relaciones Familiares Y Su Aporte A La Sociedad',
    date:'17 de Noviembre del 2018',
    location:'549 Audubon Avenue New York, NY, 10040',
    picture:'https://i.imgur.com/g6Gvamh.png',
    description:'Primer Symposium Piramide Guia Para Padres con concejal Ydanis Rodriguez en el George Washington Educational Campus',
    category:'Comunitario'
  },
  {
    name:'Maltrato A Los Niños Y Sus Consecuencias',
    date:'27 de Abril del 2018',
    location:'228 East 125th St New York, NY, 10035',
    picture:'https://i.imgur.com/N88BMq6.png',
    description:'Conferencia sobre el maltrato a los niños y sus consecuencias en Church of Scientology Harlem - Community Center',
    category:'Conferencia'
  },
  {
    name:'Conferencia Sobre La Comunicacion Efectiva',
    date:'10 de Abril del 2019',
    location:' 501 W 165th St, New York, NY 10032',
    picture:'https://i.imgur.com/kvlSwUb.png',
    description:'Conferencia sobre la comunicación impartida en la escuela Gregorio Luperon',
    category:'Conferencia'
  }
]


Evento_list.each do |evento|
  Evento.create!(evento)
end

puts "#{Evento.count} events created"