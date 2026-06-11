var config = {
     style: 'mapbox://styles/mapbox/outdoors-v12',
    accessToken: 'pk.eyJ1IjoiY2JlbGwwMyIsImEiOiJjbXBtNGV4bWUxc3VjMnRvYm1zanZ6aGc2In0.ewRlz6_VacKVx_To1eYDOg',
    // sets visbality of markers
    showMarkers: true,
    // sets marker color
    markerColor: '#b63fce',
    //sets the theme of the story map
    theme: 'dark',
    title: 'Paisley Caves In Depth',
    subtitle: 'How Paisley Caves has shaped what we know about people and the enviroment in the Pleistocene and Early Holocene.',
    byline: 'By Collin Bell',
    footer: 'Sources:<br> Blong, J. C., Adams, M. E., Sanchez, G., Jenkins, D. L., Bull, I. D., & Shillito, L.-M 2020 Younger Dryas and early holocene subsistence in the Northern Great Basin: Multiproxy Analysis of coprolites from the Paisley Caves, Oregon, USA. Archaeological and Anthropological Sciences, 12(9).<br> Jenkins, D. L., Davis, L. G., Stafford, T. W., Campos, P. F., Hockett, B., Jones, G. T., Cummings, L. S., Yost, C., Connolly, T. J., Yohe, R. M., Gibbons, S. C., Raghavan, M., Rasmussen, M., Paijmans, J. L. A., Hofreiter, M., Kemp, B. M., Barta, J. L., Monroe, C., Gilbert, M. T. P., & Willerslev, E. 2012 Clovis Age Western Stemmed Projectile Points and Human Coprolites at the Paisley Caves. Science (American Association for the Advancement of Science), 337(6091), 223–228.<br> Saban, C. V., Herring, E. M., Jenkins, D. L., & Gavin, D. G. 2023 Late glacial through Early Holocene environments inferred using pollen from coprolites and sediments recovered from Paisley Caves, Oregon. Quaternary Research, 116, 78–95.<br>  Shillito, L.-M., Whelton, H. L., Blong, J. C., Jenkins, D. L., Connolly, T. J., & Bull, I. D. 2020 Pre-Clovis occupation of the Americas identified by human fecal biomarkers in coprolites from Paisley Caves, Oregon. Science Advances, 6(29), Article 6404.<br> Smith, G. M., & Barker, P. 2017 The terminal pleistocene/early holocene record in the northwestern Great Basin: What we know, what we don’t know, and how we may be wrong. PaleoAmerica, 3(1), 13–47.<br>  Created using <a href="https://github.com/mapbox/storytelling" target="_blank" rel="noopener noreferrer">Mapbox Storytelling</a> template.<br> This work is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"> ',


   // chapters for each section of the story map. 
    chapters: [
       {
           id: 'first-identifier', // identifier
           alignment: 'left',// alignment of chapter text
           hidden: false, // sets if chapter is hidden or not
           title: 'Paisley Caves',
           image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Great_Basin_map.gif',
           alt: 'Map of the Great Basin in the USA',
           description: `Source: Kmusser, By 
           <a href="//commons.wikimedia.org/wiki/User:Kmusser" target="_blank" rel="noopener noreferrer">Kmusser</a> 
           at <a href="//commons.wikimedia.org/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, 
           <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a>, 
           <a href="https://commons.wikimedia.org/w/index.php?curid=117776104" target="_blank" rel="noopener noreferrer">Link</a>
           <br><br>
           The Paisley Caves, located in Oregon and the Great Basin, are a significant archaeological site that has provided insight into the paleoenvironment of the Great Basin and human occupation during the Pleistocene and Early Holocene.`,
                location: {
                center: [-120.5527, 42.7072], // sets the center of the map
                pitch: 10, // sets the pitch of the map
                zoom: 5.5, // sets the zoom level
                bearing: 0, //sets the bearing of the map
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false, // rotaion of the viewer
            onChapterEnter: [ ], //chapter entrance actions
            onChapterExit: [ ] // chapter exit actions
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: ' Important findings at the Paisley Caves',
            description: 'The Paisley Caves are important to understanding the history of people and the paleoenvironment in the Great Basin, because what has been found there challenges previous ideas of how and when people initially arrived into what is now North America. The main evidence found at Paisley Caves that show that people arrived earlier than expected, is found through coprolites and western stemmed projectile points. Before the discoveries found at the Paisley Caves, it was thought that clovis point technology was the first to arrive in North America, and that people arrived around 13,000 years ago through the Ice Free Corridor.  ',
            location: {
                center: [-120.5527, 42.7072],
                zoom: 6.5, 
                pitch: 60, 
                bearing: -53.2, 
    
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Impact of Western Stemmed Projectile Points at Paisley Caves',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Western_Stemmed_Tradition_points.png',
            alt: 'Western Stemmed projectile points ',
            imageSize: 'small', // sets the size of the image to 250px
            description: 'Source: Thomas Brown, Daniel McGowan Gilmour, Paul S. Solimano, Kenneth Ames, <a href="https://pdxscholar.library.pdx.edu/anth_fac/201/" target="_blank" rel="noopener noreferrer">https://pdxscholar.library.pdx.edu/anth_fac/201/</a> The Radiocarbon Record of the Western Stemmed Tradition on the Southern Columbia Plateau of Western North America, <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=149052877" target="_blank" rel="noopener noreferrer">Link</a> <br><br> Western Stemmed projectile points were an important find at the Paisley Caves because they helped to challenge previous assumptions about early human migration and technology in North America and the Great Basin. The projectile points found were relatively dated to about 11,070 and 11,340 radio carbon years which would make them as old or older than discovered Clovis technology. Due to the age of the Western Stemmed projectile points, it means that humans entered what is now North America before the Ice Free corridor was open. This means that people likely arrived and made their way through North America by moving along the Pacific Coast. The age of the Western Stemmed projectile points also means that Western Stemmed technology and Clovis technology developed independently from each other and are not connected.',


            location: {
                center: [-120.5527, 42.7072], 
                zoom: 6.0, 
                pitch: 60, 
                bearing: -63.00 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true, 
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Importance of Coprolites at Paisley Caves',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Human_Coprolite_from_the_Paisley_Caves.jpg',
            alt: 'Human coprolites from the Paisley Caves',
            description: 'Source: Dr. Dennis LeRoy Jones - <a href="https://osucascades.edu/sites/osucascades.edu/files/Jenkins.pdf" target="_blank" rel="noopener noreferrer">https://osucascades.edu/sites/osucascades.edu/files/Jenkins.pdf</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=115683365" target="_blank" rel="noopener noreferrer">Link</a> <br><br> Coprolites are another important find at the Paisley Caves. Coprolites are fossilized poop, and can contain remains of partially digested materials. Coprolites at Paisley Caves give insight into what produced them, as well as what the environment was like at the time. Some of the coprolites were found to contain human DNA through fecal lipid biomarkers, which were dated to be around 12,400 radio carbon years. This finding shows that humans made the coprolites which predate clovis technology and provide further evidence that people arrived earlier than previously thought and through the Pacific Coastal route. Coprolites also contain pollen which can give insights into what the environment was like when the coprolites were made.',

            location: {
                center: [-120.5527, 42.7072],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'fith-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Paleoenvironment at Paisley Caves',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/1_map_of_Pleistocene_lakes_in_the_Great_Basin.png/1280px-1_map_of_Pleistocene_lakes_in_the_Great_Basin.png',
            alt: 'Map of Pleistocene lakes in the Great Basin',
           description: 'Source: By J. Havens - [drawn by J. Havens, U.S. Geological Survey, modified from figure 2 of Morrison, 1991 (Geological Society of America, Volume K-2, Quaternary Nonglacial Geology: Conterminous U.S.); first released by Reheis, M.C., and Bright, J., in 2009 on a now-defunct U.S.G.S. website; further modified by J. Havens in 2019]. Note: present day Lake Abert incorrectly identified as “Albert”, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=89418876" target="_blank" rel="noopener noreferrer">Link</a><br><br> Pollen found in coprolites and sediment at Paisley Caves has provided an idea of what the environment was like in the Early Holocene and Late Pleistocene. The analysis of pollen found in coprolites shows that lakes and wetlands covered a much larger area and were much closer to the Paisley Caves, as well as more forested areas in the Cascade mountains. A shift in the Early Holocene also shows a shrinking of the lakes and an increase in wetlands. Pollen levels suggest short term seasonal occupation of the caves during the spring, summer, and fall. Pollen can be found in coprolites because when people breathe in, drink water, or consume plant materials they ingest pollen.',
            location: {
                center: [-120.5527, 42.7072],
                zoom: 5.5,
                pitch: 10,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'What was learned from Paisley Caves',
            description: 'The findings at Paisley Caves have significantly contributed to our understanding of early human migration, technology and the environment in North America and the Great Basin during the Pleistocene and Early Holocene. The Western Stemmed projectile points and coprolites found at Paisley Caves have provided evidence for earlier human arrival and Pacific Coastal migration as an initial way for people to enter North America, as well as evidence that Western Stemmed points and Clovis technology developed independently from each other. The pollen in the human coprolites also provide insight into the paleoenvironment of the Great Basin and how the lakes used to be larger and when they started to dry there were more wetlands. The pollen also shows the seasonal occupation of the Paisley Caves and how the caves were occupied during the months with greater vegetation like the summer, spring, and fall. ',
            location: {
                center: [-120.5527, 42.7072],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
