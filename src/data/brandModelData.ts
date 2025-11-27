// frontend/constants/deviceData.js



export interface BrandModel {
  brand: string;
  models: string[];
  series?: string[];  // optional (for RAM only)
}

export interface BrandModelData {
  [key: string]: BrandModel[] | string[];
}


export const brandModelData = {
  laptops: [
    { brand: "Dell", models: ["Inspiron 14", "Inspiron 15", "XPS 13", "XPS 15", "Latitude 5400", "Vostro 3510", "G15"] },
    { brand: "HP", models: ["Pavilion 15", "Envy x360", "Spectre x360", "Victus 16", "Omen 15", "EliteBook 840"] },
    { brand: "Lenovo", models: ["ThinkPad", "ThinkPad E14", "IdeaPad 3", "IdeaPad Slim 5", "Yoga 7i", "Legion 5", "V14"] },
    { brand: "Asus", models: ["VivoBook 15", "ZenBook 14", "TUF Gaming F15", "ROG Zephyrus G14", "ExpertBook B5"] },
    { brand: "Acer", models: ["Aspire 5", "Nitro 5", "Swift 3", "Predator Helios 300"] },
    { brand: "Apple", models: ["MacBook Air M1", "MacBook Air M2", "MacBook Pro 13", "MacBook Pro 16"] },
    { brand: "MSI", models: ["Modern 14", "Katana GF66", "Prestige 15", "Raider GE78"] },
    { brand: "Samsung", models: ["Galaxy Book 2", "Galaxy Book 4", "Galaxy Book Flex"] },
    { brand: "Microsoft", models: ["Surface Laptop 4", "Surface Laptop Studio", "Surface Book 3"] },
    { brand: "Razer", models: ["Blade 14", "Blade 15", "Blade Stealth 13"] },
  ],

  desktops: [
    { brand: "Dell", models: ["OptiPlex 3080", "OptiPlex 5080", "OptiPlex 7080", "Inspiron Desktop", "Vostro Desktop", "XPS Desktop"] },
    { brand: "HP", models: ["HP Pavilion Desktop", "HP Envy Desktop", "HP EliteDesk 800", "HP ProDesk 400", "HP Omen Desktop"] },
    { brand: "Lenovo", models: ["ThinkCentre M70", "ThinkCentre M80", "ThinkCentre M90", "Lenovo IdeaCentre 3", "Lenovo Legion Tower", "ThinkStation P Series"] },
    { brand: "Asus", models: ["Asus ROG Strix", "Asus ProArt Station", "Asus ExpertCenter", "Asus VivoPC"] },
    { brand: "Acer", models: ["Acer Aspire Desktop", "Acer Veriton", "Acer Predator Orion", "Acer Nitro Desktop"] },
    { brand: "MSI", models: ["MSI Infinite Series", "MSI Trident Series", "MSI Codex Series", "MSI Creator P Series"] },
    { brand: "Apple", models: ["iMac 24-inch", "iMac 27-inch", "Mac Mini M1", "Mac Mini M2"] },
    { brand: "Intel", models: ["Intel NUC 11", "Intel NUC 12", "Intel NUC Extreme", "Intel NUC Performance"] },
    { brand: "AMD", models: ["AMD Ryzen Desktop Build", "AMD Custom PC", "AMD Gaming Tower"] },
    { brand: "Zotac", models: ["Zotac ZBOX C Series", "Zotac ZBOX M Series", "Zotac ZBOX Q Series", "Zotac MAGNUS Gaming Mini"] },
  ],

  cpu: [
    { brand: "Intel", models: ["i3 10th Gen", "i5 10th Gen", "i7 10th Gen", "i3 11th Gen", "i5 11th Gen", "i7 11th Gen", "i3 12th Gen", "i5 12th Gen", "i7 12th Gen"] },
    { brand: "AMD", models: ["Ryzen 3 3200G", "Ryzen 5 3600", "Ryzen 7 3700X", "Ryzen 9 5900X", "Ryzen 5 5600G", "Ryzen 7 5800X"] },
  ],

  ram: [
    { brand: "Corsair", models: ["Vengeance LPX", "Vengeance RGB Pro", "Dominator Platinum RGB", "Vengeance Pro SL", "Vengeance RGB RT", "Vengeance DDR5"], series: [] },
    { brand: "Kingston", models: ["HyperX Fury", "HyperX Predator", "Kingston Fury Beast", "Kingston Fury Renegade", "Kingston Fury Impact"], series: [] },
    { brand: "Crucial", models: ["Crucial Ballistix", "Ballistix MAX", "Ballistix RGB", "Crucial Pro DDR5", "Crucial Pro DDR4", "Crucial Value RAM"], series: [] },
    { brand: "G.Skill", models: ["Trident Z RGB", "Trident Z Neo", "Trident Z Royal", "Ripjaws V", "Ripjaws S5", "Flare X5"], series: [] },
    { brand: "ADATA", models: ["XPG Spectrix D60G", "XPG Spectrix D45G", "XPG Spectrix D80", "XPG Hunter", "ADATA Premier", "XPG Lancer DDR5"], series: [] },
    { brand: "Samsung", models: ["Samsung Original DDR4", "Samsung DDR5 OEM", "Samsung B-Die", "Samsung Green RAM", "Samsung Server RAM ECC"], series: [] },
    { brand: "Hynix", models: ["Hynix Original DDR4", "Hynix DDR5", "Hynix CJR", "Hynix DJR", "Hynix M-Die", "Hynix Server ECC RAM"], series: [] },
  ],

  hardDisks: [
    { brand: "Seagate", models: ["Seagate Barracuda 500GB", "Seagate Barracuda 1TB", "Seagate Barracuda 2TB"] },
    { brand: "WesternDigital", models: ["WD Blue 500GB", "WD Blue 1TB", "WD Black 1TB", "WD Black 2TB"] },
    { brand: "Toshiba", models: ["Toshiba 1TB", "Toshiba 2TB"] },
    { brand: "Samsung", models: ["Samsung SSD 860 EVO", "Samsung SSD 870 EVO"] },
  ],

  mobiles: [
    { brand: "Samsung", models: ["Galaxy S21", "Galaxy S22", "Galaxy S23", "Galaxy A52", "Galaxy A54", "Galaxy M33"] },
    { brand: "Apple", models: ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15"] },
    { brand: "Xiaomi", models: ["Redmi Note 10", "Redmi Note 11", "Mi 11X", "Poco X3", "Poco F4"] },
    { brand: "OnePlus", models: ["OnePlus 8", "OnePlus 9", "OnePlus 10", "OnePlus Nord 2", "OnePlus Nord CE"] },
    { brand: "Realme", models: ["Realme 7", "Realme 8", "Realme 9", "Realme Narzo 30", "Realme X7"] },
    { brand: "Vivo", models: ["Vivo V21", "Vivo V23", "Vivo Y21", "Vivo Y33", "Vivo X60"] },
    { brand: "Oppo", models: ["Oppo A53", "Oppo A74", "Oppo F19", "Oppo Reno 6", "Oppo Reno 8"] },
    { brand: "Motorola", models: ["Moto G40 Fusion", "Moto G60", "Moto Edge 20", "Moto One Fusion+"] },
    { brand: "Infinix", models: ["Infinix Hot 10", "Infinix Hot 12", "Infinix Note 11", "Infinix Zero 5G"] },
  ],

  tablets: [
    { brand: "Samsung", models: ["Galaxy Tab A7", "Galaxy Tab S6 Lite", "Galaxy Tab S7", "Galaxy Tab S8"] },
    { brand: "Apple", models: ["iPad 9th Gen", "iPad 10th Gen", "iPad Air", "iPad Mini", "iPad Pro 11", "iPad Pro 12.9"] },
    { brand: "Lenovo", models: ["Lenovo Tab M8", "Lenovo Tab M10", "Lenovo Yoga Smart Tab", "Lenovo Tab P11"] },
    { brand: "Xiaomi", models: ["Mi Pad 5", "Redmi Pad"] },
    { brand: "Realme", models: ["Realme Pad", "Realme Pad Mini"] },
    { brand: "Huawei", models: ["MatePad 10.4", "MatePad Pro"] },
  ],

  monitors: [
    { brand: "Dell", models: ["Dell Ultrasharp", "Dell P Series", "Dell S Series", "Dell Gaming Monitor"] },
    { brand: "HP", models: ["HP Pavilion Monitor", "HP M24fw", "HP Omen Monitor"] },
    { brand: "Samsung", models: ["Samsung Odyssey G3", "Samsung Odyssey G5", "Samsung Curved Series", "Samsung Smart Monitor"] },
    { brand: "LG", models: ["LG UltraGear", "LG UltraWide", "LG IPS Monitor", "LG 4K Monitor"] },
    { brand: "Acer", models: ["Acer Nitro", "Acer Predator", "Acer SA Series"] },
    { brand: "Asus", models: ["Asus TUF Gaming", "Asus ROG Swift", "Asus ProArt", "Asus VA24E"] },
  ],

  printers: [
    { brand: "HP", models: ["HP DeskJet 2331", "HP LaserJet Pro", "HP Smart Tank", "HP OfficeJet Pro"] },
    { brand: "Canon", models: ["Canon Pixma G3000", "Canon Laser Shot", "Canon Maxify", "Canon ImageClass"] },
    { brand: "Epson", models: ["Epson EcoTank L3150", "Epson L3250", "Epson Workforce", "Epson M200"] },
    { brand: "Brother", models: ["Brother DCP-L2520", "Brother HL-L2321D", "Brother Ink Tank Printer"] },
  ],

  tvs: [
    { brand: "Samsung", models: ["Samsung Crystal UHD", "Samsung QLED", "Samsung Neo QLED", "Samsung Frame TV"] },
    { brand: "Sony", models: ["Sony Bravia LED", "Sony Bravia XR", "Sony OLED A80J", "Sony X90J"] },
    { brand: "LG", models: ["LG UHD", "LG NanoCell", "LG OLED A Series", "LG OLED C Series"] },
    { brand: "Panasonic", models: ["Panasonic 4K LED", "Panasonic Android TV"] },
    { brand: "OnePlus", models: ["OnePlus TV U1", "OnePlus TV Q1", "OnePlus TV Y Series"] },
    { brand: "Mi", models: ["Mi 4K TV", "Mi Horizon Edition", "Redmi Smart TV X"] },
    { brand: "TCL", models: ["TCL 4K HDR", "TCL QLED", "TCL P615"] },
    { brand: "Hisense", models: ["Hisense A6", "Hisense U6G", "Hisense 4K LED"] },
  ],

  iPhones: [
    "iPhone 6", "iPhone 6 Plus", "iPhone 6S", "iPhone 6S Plus",
    "iPhone 7", "iPhone 7 Plus", "iPhone 8", "iPhone 8 Plus",
    "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
    "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
    "iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max",
    "iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max",
    "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
    "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"
  ]
};
