app.controller('MainController', ['$scope', 'Sem3', function($scope, Sem3) {
//data from the html gets stored here, then needs to get sent to the service
  $scope.input = "";

  $scope.data = {
    repeatSelect: null,
    availableOptions: [
      {id: '0', name: 'Search'},
      {id: '1', name: 'Url'},
      {id: '2', name: 'UPC/EAN'}
    ],
   };

  $scope.apiData = {
                    "brand": "Toshiba",
                    "description": "Display: 13.3\"widescreen HD TFT LED Backlit displa... (visit site URLs for full description)",
                    "sem3_id": "2iTwoIQGhEKMiW62moMy0u",
                    "name": "Toshiba Portege Z830-S8301 13.3-Inch Netbook Computer",
                    "upc": "883974958450",
                    "sitedetails": [
                      {
                        "latestoffers": [
                          {
                            "price": "360.00",
                            "currency": "USD",
                            "lastrecorded_at": 1410797800,
                            "seller": "dragdons",
                            "condition": "Used - Very Good",
                            "shipping": "6.99",
                            "id": "6OSVBU9ZQ0ieACuEuyeyse",
                            "firstrecorded_at": 1410797800,
                            "isactive": 0
                          },
                          {
                            "id": "58I8fFC5dQWQ4u0SwGIyKA",
                            "firstrecorded_at": 1402113600,
                            "condition": "Used - Very Good",
                            "seller": "Arsenal PC",
                            "lastrecorded_at": 1409330900,
                            "currency": "USD",
                            "availability": "[BBX: Buy Box]",
                            "price": "689.00",
                            "isactive": 0
                          },
                          {
                            "currency": "USD",
                            "lastrecorded_at": 1409330900,
                            "price": "450.00",
                            "id": "6eOarV0JSS8g0sEKKsqqOY",
                            "firstrecorded_at": 1409330900,
                            "shipping": "6.99",
                            "seller": "dragdons",
                            "condition": "Used - Very Good",
                            "isactive": 0
                          }
                        ],
                        "recentoffers_count": 0,
                        "sku": "B006Z90HMG",
                        "url": "http:\/\/www.amazon.com\/dp\/B006Z90HMG",
                        "name": "amazon.com"
                      },
                      {
                        "url": "http:\/\/www.walmart.com\/ip\/20604679",
                        "recentoffers_count": 0,
                        "name": "walmart.com",
                        "sku": "20604679",
                        "latestoffers": [
                          {
                            "id": "6JotT9dMmWeYoi0UqKESoO",
                            "firstrecorded_at": 1349396400,
                            "seller": "Walmart",
                            "currency": "USD",
                            "availability": "Out of Stock",
                            "lastrecorded_at": 1412494500,
                            "price": "1167.74",
                            "isactive": 0
                          }
                        ]
                      },
                      {
                        "name": "newegg.com",
                        "url": "http:\/\/www.newegg.com\/Product\/Product.aspx?Item=N82E16834214948",
                        "sku": "N82E16834214948",
                        "recentoffers_count": 0,
                        "latestoffers": [
                          {
                            "seller": "Newegg",
                            "id": "5QTxsmf7GwYQWca60UQyAy",
                            "firstrecorded_at": 1350835696,
                            "price": "1134.99",
                            "lastrecorded_at": 1382836600,
                            "currency": "USD",
                            "availability": "OUT OF STOCK. [BBX: Buy Box]",
                            "isactive": 0
                          },
                          {
                            "price": "1134.99",
                            "currency": "USD",
                            "availability": "Deactivated. This item is currently out of stock and it may or may not be restocked. [BBX: Buy Box]",
                            "lastrecorded_at": 1362344900,
                            "seller": "newegg.com",
                            "shipping": "14.30",
                            "firstrecorded_at": 1360613800,
                            "id": "3l8ZNONJHyWoMsaO8AGoCQ",
                            "isactive": 0
                          }
                        ]
                      }
                    ],
                    "height": "15.24",
                    "updated_at": 1460575499,
                    "manufacturer": "Toshiba America Information Systems",
                    "mpn": "PT225U-00400EN",
                    "weight": "1120373.15",
                    "width": "315.98",
                    "color": "Silver",
                    "features": {
                      "Other Features": "Security lock slot (cable lock sold separately), Toshiba EasyGuard, Intel Active Management Technology (iAMT), USB Sleep-and-charge ports",
                      "RAM": "4 GB ( 1 x 2 GB + 2 GB (soldered) )",
                      "Audio Features": "MaxxAudio 3",
                      "Widescreen": "Yes",
                      "Network Interface": "Gigabit Ethernet",
                      "Max Allocated RAM Size": "1696 MB",
                      "CPU": "Intel Core i5 (2nd Gen) 2557M \/ 1.7 GHz",
                      "Graphics Processor": "Intel HD Graphics 3000",
                      "Input": "AC 120\/230 V ( 50\/60 Hz )",
                      "Sound": "Stereo speakers , microphone",
                      "Microsoft Office Preloaded": "Includes a pre-loaded image of select Microsoft Office 2010 suites. Purchase an Office 2010 Product Key Card or disc to activate preloaded software on this PC.",
                      "Max RAM Supported": "6 GB",
                      "Number of Cores": "Dual-Core",
                      "Memory Allocation Technology": "Dynamic Video Memory Technology",
                      "Capacity": "47 Wh",
                      "Resolution": "1.3 Megapixel",
                      "Output": "45 Watt , 19 V , 2.37 A",
                      "Security": "Trusted Platform Module (TPM 1.2) Security Chip , fingerprint reader",
                      "Run Time": "Up to 8.3 hour(s)",
                      "Technology": "8-cell lithium ion",
                      "Wireless Controller": "Intel Centrino Advanced-N 6230",
                      "Interfaces": "VGA LAN Microphone input Headphone output 2 x USB 2.0 USB 3.0 HDMI",
                      "Min Operating Temperature": "41 \u00c2\u00b0F",
                      "LCD Backlight Technology": "LED backlight",
                      "blob": "Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10\/100\/1000 Gigabit Ethernet, 802.11a\/g\/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a\/g\/n connection built into your PC; Bluetooth v3.0 + HS; 1.3MP webcam with built-in microphone; 6-in-1 memory card reader; 1 x USB 3.0 port, 1 x USB 2.0 port, 1 x USB 2.0\/eSATA combo port, 1 x headphone jack, 1 x microphone jack, 1 x RJ-45 Ethernet port, 1 x RGB port, 1 x HDMI port; 8-cell lithium-ion battery, up to 8 h 17 min battery life; Norton Internet Security 2012 (30-day subscription); Toshiba Recovery Media Creator; 3-year limited warranty; Restore discs are not included (unless specified by supplier). We recommend you use the installed software to create your own restore and backup DVD the first week you use the computer.; Toshiba Ultrabook Laptop PC; Power cord; 8-cell lithium-ion battery; Quick Start Guide; Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10\/100\/1000 Gigabit Ethernet, 802.11a\/g\/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a\/g\/n connection built into your PC; Bluetooth v3.0 + HS; 1.3MP webcam with built-in microphone; 6-in-1 memory card reader; 1 x USB 3.0 port, 1 x USB 2.0 port, 1 x USB 2.0\/eSATA combo port, 1 x headphone jack, 1 x microphone jack, 1 x RJ-45 Ethernet port, 1 x RGB port, 1 x HDMI port; 8-cell lithium-ion battery, up to 8 h 17 min battery life; Norton Internet Security 2012 (30-day subscription); Toshiba Recovery Media Creator; 3-year limited warranty; Restore discs are not included (unless specified by supplier). We recommend you use the installed software to create your own restore and backup DVD the first week you use the computer.; Toshiba Ultrabook Laptop PC; Power cord; 8-cell lithium-ion battery; Quick Start Guide; Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10\/100\/1000 Gigabit Ethernet, 802.11a\/g\/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a\/g\/n connection built into your PC",
                      "Image Aspect Ratio": "16:9",
                      "Camera": "Integrated webcam",
                      "ENERGY STAR Qualified": "Yes",
                      "Wireless": "802.11n, Bluetooth 3.0 HS",
                      "Chipset": "Mobile Intel QM67 Express",
                      "Interface": "Serial ATA-300",
                      "Service & Support Details": "Limited warranty - 3 years Limited warranty - battery - 1 year",
                      "EPEAT Compliant": "EPEAT Gold",
                      "Max Turbo Speed": "2.7 GHz",
                      "Ethernet Controller": "Intel 82579LM",
                      "Speed": "1333 MHz",
                      "Slots Qty": "1",
                      "Max Operating Temperature": "95 \u00c2\u00b0F",
                      "Service & Support": "3 years warranty",
                      "Cache": "L3 - 3 MB",
                      "Hard Drive": "128 GB SSD",
                      "Memory Card Reader": "Yes ( SD Card, miniSD, SDHC Memory Card, microSD )",
                      "64-bit Computing": "Yes",
                      "Compliant Standards": "RoHS",
                      "Operating System": "Microsoft Windows 7 Professional (32\/64 bits)",
                      "Humidity Range Operating": "20 - 80% (non-condensing)",
                      "System Type": "Ultrabook",
                      "Software Included": "Adobe Acrobat Reader, Google Toolbar, Adobe Flash Player, Skype, Toshiba Assist, Toshiba Recovery DiskCreator, Windows Live Essentials, Toshiba PC Health Monitor, Toshiba Eco Utility, Toshiba ReelTime, Toshiba Bulletin Board, Google Chrome, Toshiba Media Controller, Microsoft Silverlight, Toshiba Disc Creator, Toshiba Fingerprint Utility, Toshiba Security Assist, Toshiba Value Added Package, Windows Live Messenger, Face Recognition software, Windows Live Photo Gallery, Windows Live Mail, Windows Live Writer, Microsoft Windows Media Player 12, Toshiba Service Station, Toshiba Hardware Setup Utility, Toshiba Web Camera Application, Toshiba Online Backup (30 days trial), Windows Live Movie Maker, Microsoft Office 2010 Starter, Toshiba App Place, Toshiba Book Place, Toshiba HDD\/SSD Alert, Toshiba Sleep Utility, Toshiba Password Utility, Microsoft Internet Explorer 9.0, Toshiba Device Access Control, Toshiba Resolution+, Norton Internet Security 2012 (30 days trial), Intel Wireless Display Technology 2.1",
                      "Localization": "United States"
                    },
                    "cat_id": "23130",
                    "category": "Netbooks",
                    "model": "PT225U 004004;Z830 S8301",
                    "created_at": 1347480704,
                    "ean": "0883974958450",
                    "length": "227.08",
                    "gtins": [
                      "00883974958450"
                    ],
                    "geo": [
                      "usa"
                    ],
                    "price_currency": "USD",
                    "images": [
                      "http:\/\/sem3-idn.s3-website-us-east-1.amazonaws.com\/44abf7582bdd564f8c4282c218aadf9f,0.jpg"
                    ],
                    "images_total": 1
                  }

  // $scope.findType = function () {

  // 	var index = $scope.data.repeatSelect;
  // 	// if ($scope.data.repeatSelect === "1") {
  // 	console.log('this is the type: ', $scope.data.availableOptions[index].name);
  // 	//take the search and the query and query the correct function
  //   console.log('input: ',$scope.input);
  //   var identifier;
  
  //   if ( $scope.data.availableOptions[index].name === "Search" ) {
  //     identifier = "search";
  //   } else if ( $scope.data.availableOptions[index].name === "Url" ) {
  //     identifier = "site";
  //   } else if ( $scope.data.availableOptions[index].name === "UPC/EAN" ) {
  //     identifier = "upc";
  //   }
		// Sem3.apiQuery(identifier, $scope.input)
  //   .then(function (val) {
  //     console.log('back this is the data', val);
  //     $scope.apiData = {"data":{"total_results_count":1,"code":"OK","offset":0,"results_count":1,"results":[{"brand":"Toshiba","description":"Display: 13.3\"widescreen HD TFT LED Backlit displa... (visit site URLs for full description)","sem3_id":"2iTwoIQGhEKMiW62moMy0u","name":"Toshiba Portege Z830-S8301 13.3-Inch Netbook Computer","upc":"883974958450","sitedetails":[{"latestoffers":[{"price":"360.00","currency":"USD","lastrecorded_at":1410797800,"seller":"dragdons","condition":"Used - Very Good","shipping":"6.99","id":"6OSVBU9ZQ0ieACuEuyeyse","firstrecorded_at":1410797800,"isactive":0},{"id":"58I8fFC5dQWQ4u0SwGIyKA","firstrecorded_at":1402113600,"condition":"Used - Very Good","seller":"Arsenal PC","lastrecorded_at":1409330900,"currency":"USD","availability":"[BBX: Buy Box]","price":"689.00","isactive":0},{"currency":"USD","lastrecorded_at":1409330900,"price":"450.00","id":"6eOarV0JSS8g0sEKKsqqOY","firstrecorded_at":1409330900,"shipping":"6.99","seller":"dragdons","condition":"Used - Very Good","isactive":0}],"recentoffers_count":0,"sku":"B006Z90HMG","url":"http://www.amazon.com/dp/B006Z90HMG","name":"amazon.com"},{"url":"http://www.walmart.com/ip/20604679","recentoffers_count":0,"name":"walmart.com","sku":"20604679","latestoffers":[{"id":"6JotT9dMmWeYoi0UqKESoO","firstrecorded_at":1349396400,"seller":"Walmart","currency":"USD","availability":"Out of Stock","lastrecorded_at":1412494500,"price":"1167.74","isactive":0}]},{"name":"newegg.com","url":"http://www.newegg.com/Product/Product.aspx?Item=N82E16834214948","sku":"N82E16834214948","recentoffers_count":0,"latestoffers":[{"seller":"Newegg","id":"5QTxsmf7GwYQWca60UQyAy","firstrecorded_at":1350835696,"price":"1134.99","lastrecorded_at":1382836600,"currency":"USD","availability":"OUT OF STOCK. [BBX: Buy Box]","isactive":0},{"price":"1134.99","currency":"USD","availability":"Deactivated. This item is currently out of stock and it may or may not be restocked. [BBX: Buy Box]","lastrecorded_at":1362344900,"seller":"newegg.com","shipping":"14.30","firstrecorded_at":1360613800,"id":"3l8ZNONJHyWoMsaO8AGoCQ","isactive":0}]}],"height":"15.24","updated_at":1460575499,"manufacturer":"Toshiba America Information Systems","mpn":"PT225U-00400EN","weight":"1120373.15","width":"315.98","color":"Silver","features":{"Other Features":"Security lock slot (cable lock sold separately), Toshiba EasyGuard, Intel Active Management Technology (iAMT), USB Sleep-and-charge ports","RAM":"4 GB ( 1 x 2 GB + 2 GB (soldered) )","Audio Features":"MaxxAudio 3","Widescreen":"Yes","Network Interface":"Gigabit Ethernet","Max Allocated RAM Size":"1696 MB","CPU":"Intel Core i5 (2nd Gen) 2557M / 1.7 GHz","Graphics Processor":"Intel HD Graphics 3000","Input":"AC 120/230 V ( 50/60 Hz )","Sound":"Stereo speakers , microphone","Microsoft Office Preloaded":"Includes a pre-loaded image of select Microsoft Office 2010 suites. Purchase an Office 2010 Product Key Card or disc to activate preloaded software on this PC.","Max RAM Supported":"6 GB","Number of Cores":"Dual-Core","Memory Allocation Technology":"Dynamic Video Memory Technology","Capacity":"47 Wh","Resolution":"1.3 Megapixel","Output":"45 Watt , 19 V , 2.37 A","Security":"Trusted Platform Module (TPM 1.2) Security Chip , fingerprint reader","Run Time":"Up to 8.3 hour(s)","Technology":"8-cell lithium ion","Wireless Controller":"Intel Centrino Advanced-N 6230","Interfaces":"VGA LAN Microphone input Headphone output 2 x USB 2.0 USB 3.0 HDMI","Min Operating Temperature":"41 Â°F","LCD Backlight Technology":"LED backlight","blob":"Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10/100/1000 Gigabit Ethernet, 802.11a/g/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a/g/n connection built into your PC; Bluetooth v3.0 + HS; 1.3MP webcam with built-in microphone; 6-in-1 memory card reader; 1 x USB 3.0 port, 1 x USB 2.0 port, 1 x USB 2.0/eSATA combo port, 1 x headphone jack, 1 x microphone jack, 1 x RJ-45 Ethernet port, 1 x RGB port, 1 x HDMI port; 8-cell lithium-ion battery, up to 8 h 17 min battery life; Norton Internet Security 2012 (30-day subscription); Toshiba Recovery Media Creator; 3-year limited warranty; Restore discs are not included (unless specified by supplier). We recommend you use the installed software to create your own restore and backup DVD the first week you use the computer.; Toshiba Ultrabook Laptop PC; Power cord; 8-cell lithium-ion battery; Quick Start Guide; Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10/100/1000 Gigabit Ethernet, 802.11a/g/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a/g/n connection built into your PC; Bluetooth v3.0 + HS; 1.3MP webcam with built-in microphone; 6-in-1 memory card reader; 1 x USB 3.0 port, 1 x USB 2.0 port, 1 x USB 2.0/eSATA combo port, 1 x headphone jack, 1 x microphone jack, 1 x RJ-45 Ethernet port, 1 x RGB port, 1 x HDMI port; 8-cell lithium-ion battery, up to 8 h 17 min battery life; Norton Internet Security 2012 (30-day subscription); Toshiba Recovery Media Creator; 3-year limited warranty; Restore discs are not included (unless specified by supplier). We recommend you use the installed software to create your own restore and backup DVD the first week you use the computer.; Toshiba Ultrabook Laptop PC; Power cord; 8-cell lithium-ion battery; Quick Start Guide; Intel i5-2557M processor; 4GB DDR3 SDRAM system memory (expandable to 8GB); 128GB solid state drive; 10/100/1000 Gigabit Ethernet, 802.11a/g/n Wireless LAN; 13.3\" HD LED-backlit display; 1.70GHz, 3MB L3 Cache; Gives you the power to handle most power hungry applications and tons of multimedia work; Store 85,000 photos, 36,000 songs or 67 hours of HD video and more; Connect to a broadband modem with wired Ethernet or wirelessly connect to a Wi-Fi signal or hotspot with the 802.11a/g/n connection built into your PC","Image Aspect Ratio":"16:9","Camera":"Integrated webcam","ENERGY STAR Qualified":"Yes","Wireless":"802.11n, Bluetooth 3.0 HS","Chipset":"Mobile Intel QM67 Express","Interface":"Serial ATA-300","Service & Support Details":"Limited warranty - 3 years Limited warranty - battery - 1 year","EPEAT Compliant":"EPEAT Gold","Max Turbo Speed":"2.7 GHz","Ethernet Controller":"Intel 82579LM","Speed":"1333 MHz","Slots Qty":"1","Max Operating Temperature":"95 Â°F","Service & Support":"3 years warranty","Cache":"L3 - 3 MB","Hard Drive":"128 GB SSD","Memory Card Reader":"Yes ( SD Card, miniSD, SDHC Memory Card, microSD )","64-bit Computing":"Yes","Compliant Standards":"RoHS","Operating System":"Microsoft Windows 7 Professional (32/64 bits)","Humidity Range Operating":"20 - 80% (non-condensing)","System Type":"Ultrabook","Software Included":"Adobe Acrobat Reader, Google Toolbar, Adobe Flash Player, Skype, Toshiba Assist, Toshiba Recovery DiskCreator, Windows Live Essentials, Toshiba PC Health Monitor, Toshiba Eco Utility, Toshiba ReelTime, Toshiba Bulletin Board, Google Chrome, Toshiba Media Controller, Microsoft Silverlight, Toshiba Disc Creator, Toshiba Fingerprint Utility, Toshiba Security Assist, Toshiba Value Added Package, Windows Live Messenger, Face Recognition software, Windows Live Photo Gallery, Windows Live Mail, Windows Live Writer, Microsoft Windows Media Player 12, Toshiba Service Station, Toshiba Hardware Setup Utility, Toshiba Web Camera Application, Toshiba Online Backup (30 days trial), Windows Live Movie Maker, Microsoft Office 2010 Starter, Toshiba App Place, Toshiba Book Place, Toshiba HDD/SSD Alert, Toshiba Sleep Utility, Toshiba Password Utility, Microsoft Internet Explorer 9.0, Toshiba Device Access Control, Toshiba Resolution+, Norton Internet Security 2012 (30 days trial), Intel Wireless Display Technology 2.1","Localization":"United States"},"cat_id":"23130","category":"Netbooks","model":"PT225U 004004;Z830 S8301","created_at":1347480704,"ean":"0883974958450","length":"227.08","gtins":["00883974958450"],"geo":["usa"],"price_currency":"USD","images":["http://sem3-idn.s3-website-us-east-1.amazonaws.com/44abf7582bdd564f8c4282c218aadf9f,0.jpg"],"images_total":1}]}} = val;
  //   })
  //   .catch(function (err) {
  //     console.log('err ', err);
  //   });

  // };

}]);
