  // SellDevice.tsx
  import { useState } from "react";
  import Navigation from "@/components/Navigation";
  import Footer from "@/components/Footer";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Label } from "@/components/ui/label";
  import { IndianRupee } from "lucide-react";
  import { useEffect } from "react";
  import { brandModelData } from  "../data/brandModelData";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { useToast } from "@/hooks/use-toast";
  import { Laptop, Upload, CheckCircle2, DollarSign } from "lucide-react";


  type FieldDef = { name: string; label: string; required?: boolean; type?: "text" | "number" | "textarea" | "yesno" };

  const DEVICE_TEMPLATES: Record<string, FieldDef[]> = {
    Laptop: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Storage" },
      { name: "screenSize", label: "Screen Size" },
      { name: "graphics", label: "Graphics Card" },
    ],
    Desktop: [
      { name: "brand", label: "Brand",},
      { name: "model", label: "Model" },
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Storage" },
      { name: "graphics", label: "Graphics Card" },
      { name: "monitorIncluded", label: "Monitor Included (Yes/No)", type: "yesno" },
    ],
    Printer: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "printerType", label: "Printer Type (Inkjet/Laser)" },
      { name: "printSpeed", label: "Print Speed (ppm)" },
    ],
    Mobile: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "storage", label: "Storage" },
      { name: "ram", label: "RAM" },
      { name: "batteryHealth", label: "Battery Health (%)", type: "number" },
      { name: "screenSize", label: "Screen Size" },
    ],
    Tablet: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "storage", label: "Storage" },
      { name: "batteryHealth", label: "Battery Health (%)", type: "number" },
      { name: "screenSize", label: "Screen Size" },
    ],
    TV: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model" },
      { name: "screenSize", label: "Screen Size" },
      { name: "displayType", label: "Display Type (LED/OLED/QLED)" },
      { name: "resolution", label: "Resolution" },
    ],
    iPhone: [
      { name: "model", label: "Model", required: true },
      { name: "storage", label: "Storage" },
      { name: "batteryHealth", label: "Battery Health (%)", type: "number" },
    ],
    iMac: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
    ],
    "Apple Laptop": [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model"},
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
    ],
  CPU: [
    { name: "brand", label: "Brand"},
    { name: "model", label: "Model"},
    { name: "cores", label: "Cores / Threads", required: true },  // add required: true
  ],
    RAM: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "model"},
      { name: "capacity", label: "Capacity (GB)", type: "number", required: true },
      { name: "type", label: "Type (DDR3/DDR4/DDR5)" },
      { name: "speed", label: "Speed (e.g., 3200 MHz)" },
    ],
    "Hard Disk": [
      { name: "brand", label: "Brand"},
          { name: "model", label: "model"},
      { name: "capacity", label: "Capacity (GB/TB)", required: true },
      { name: "diskType", label: "Type (HDD/SSD)" },
    ],
    "All-in-One PC": [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model" },
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Storage" },
    ],
    Monitor: [
      { name: "brand", label: "Brand"},
      { name: "model", label: "Model" },
      { name: "screenSize", label: "Screen Size" },
      { name: "resolution", label: "Resolution" },
    ],
    Other: [
      { name: "deviceName", label: "Device Name", required: true },
      { name: "specs", label: "Key Specifications" },
    
    ],
  };

  const DEVICE_TYPES = Object.keys(DEVICE_TEMPLATES);

  const defaultShared = {
    name: "",
    email: "",
    phone: "",
    condition: "",
    price: "",
    description: "",
  };

  const SellDevice = () => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [deviceType, setDeviceType] = useState<string>("Laptop");
    const [shared, setShared] = useState(defaultShared);
    const [details, setDetails] = useState<Record<string, any>>({});
    const [files, setFiles] = useState<File[]>([]);


  
    // Initialize details when deviceType changes
    const initDetailsFor = (type: string) => {
      const t = DEVICE_TEMPLATES[type] || [];
      const obj: Record<string, any> = {};
      t.forEach((f) => (obj[f.name] = ""));
      return obj;
    };

    // ensure details has keys for current device
  useEffect(() => {
    setDetails(initDetailsFor(deviceType));
  }, [deviceType]);

    const handleSharedChange = (field: string, value: any) =>
      setShared((p) => ({ ...p, [field]: value }));

    const handleDetailChange = (field: string, value: any) =>
      setDetails((p) => ({ ...p, [field]: value }));

    const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dt = e.target.files;
      if (!dt) return;
      const arr = Array.from(dt);
      setFiles(arr.slice(0, 5)); // limit to 5
    };
  /* const nameRegex = /^[A-Za-z]+(?:[ .][A-Za-z]+)*$/; */

  const phoneRegex = /^[6-9]\d{9}$/;



  const validate = () => {
  // --- COMMON FIELD VALIDATION ---
  const trimmedName = String(shared.name || "").trim();

  // Name required
  if (!trimmedName) {
    toast({
      title: "Missing Name",
      description: "Name is required.",
      variant: "destructive",
    });
    return false;
  }

  // Length validation (Backend: 2–50)
  if (trimmedName.length < 2 || trimmedName.length > 50) {
    toast({
      title: "Invalid Name Length",
      description: "Name must be between 2 and 50 characters.",
      variant: "destructive",
    });
    return false;
  }

  // Backend regex
  const nameRegex = /^(?:[A-Za-z]\.?)(?:\s?[A-Za-z]+){0,2}$/;

  // Pattern check
  if (!nameRegex.test(trimmedName)) {
    toast({
      title: "Invalid Name Format",
      description:
        "Enter a valid name (e.g., A.Name or A Name). Only letters, one period, and single spaces are allowed.",
      variant: "destructive",
    });
    return false;
  }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!shared.email.trim()) {
      toast({
        title: "Missing Email",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }
    if (!emailRegex.test(shared.email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Enter a valid email (e.g., name@example.com).",
        variant: "destructive",
      });
      return false;
    }

    // Phone validation
    
  // Clean phone
  const cleanPhone = shared.phone ? shared.phone.trim().replace(/\s+/g, "") : "";

  // Backend regex (DON’T CHANGE)
  const phoneRegex = /^(?:\+91|91)?(?!([6-9])\1{9})[6-9]\d{9}$/;

  // If empty
  if (!cleanPhone) {
    toast({
      title: "Missing Phone Number",
      description: "Phone number is required.",
      variant: "destructive",
    });
    return false;
  }

  // Only digits + optional +91 or 91
  if (!/^(?:\+?91)?\d+$/.test(cleanPhone)) {
    toast({
      title: "Invalid Format",
      description: "Phone number must contain only digits (with optional +91).",
      variant: "destructive",
    });
    return false;
  }

  // Remove country code for length check
  const normalized = cleanPhone.replace(/^(?:\+91|91)/, "");

  // Length must be 10 digits
  if (normalized.length !== 10) {
    toast({
      title: "Invalid Phone Number",
      description: "Phone number must contain exactly 10 digits.",
      variant: "destructive",
    });
    return false;
  }

  // Must start with 6–9
  if (!/^[6-9]/.test(normalized)) {
    toast({
      title: "Invalid Start Digit",
      description: "Indian mobile numbers must start with 6, 7, 8, or 9.",
      variant: "destructive",
    });
    return false;
  }

  // Reject repeated digits 9999999999, 2222222222, etc.
  if (/^([0-9])\1{9}$/.test(normalized)) {
    toast({
      title: "Invalid Phone Number",
      description: "Phone number cannot contain the same digit repeated 10 times.",
      variant: "destructive",
    });
    return false;
  }

  // Final backend rule check
  if (!phoneRegex.test(cleanPhone)) {
    toast({
      title: "Invalid Phone Number",
      description:
        "Please enter a valid Indian mobile number (starting with 6–9).",
      variant: "destructive",
    });
    return false;
  }

    // Condition
    if (!shared.condition) {
      toast({
        title: "Missing Condition",
        description: "Please select your device's condition.",
        variant: "destructive",
      });
      return false;
    }

  // Price Validation
  const price = shared.price ? String(shared.price).trim() : "";

  // 1. Price required
  if (!price) {
    toast({
      title: "Missing Price",
      description: "Price is required.",
      variant: "destructive",
    });
    return false;
  }

  const numericPrice = Number(price);

  // 2. Must be a valid positive number
  if (isNaN(numericPrice) || numericPrice <= 0) {
    toast({
      title: "Invalid Price",
      description: "Price must be a valid positive number.",
      variant: "destructive",
    });
    return false;
  }

  // 3. Value > 10,00,000 not allowed (backend rule)
  if (numericPrice > 1000000) {
    toast({
      title: "Price Too High",
      description: "Price cannot exceed ₹10,00,000.",
      variant: "destructive",
    });
    return false;
  }

  // 4. If price < 10,00,000 then apply regex rule
  const priceRegex = /^\d{1,6}(\.\d{1,2})?$/;

  if (numericPrice < 1000000 && !priceRegex.test(price)) {
    toast({
      title: "Invalid Price Format",
      description:
        "Price must be up to 6 digits (e.g., 50000 or 49999.99). Only 2 decimals allowed.",
      variant: "destructive",
    });
    return false;
  }

    // Device Type
    if (!deviceType) {
      toast({
        title: "Missing Device Type",
        description: "Please select a device type.",
        variant: "destructive",
      });
      return false;
    }


    // ✅ DEVICE-SPECIFIC VALIDATION (MUST BE HERE)
const deviceErrors = validateDeviceFields(deviceType, details, files);


if (deviceErrors.length > 0) {
  [...deviceErrors].reverse().forEach((msg) =>
    toast({
      title: "Validation Error",
      description: msg,
      variant: "destructive",
    })
  );
  return false;
}
  

     return true;
  };

 //  Map UI deviceType → brandModelData keys
const typeKeyMap: any = {
  laptop: "laptops",
  desktop: "desktops",
  cpu: "cpu",
  ram: "ram",
  "hard disk": "hardDisks",
  harddisk: "hardDisks",
  hard_disk: "hardDisks",
  mobile: "mobiles",
  tablet: "tablets",
  monitor: "monitors",
  printer: "printers",
  tv: "tvs",
  iphone: "iPhones",
};

const normalizeString = (str: string) => str.toLowerCase().replace(/\s+/g, "");

const validateBrandModel = (
  deviceType: string,
  details: any,
  errors: string[]
) => {
  const brandInput = details.brand?.trim();
  const modelInput = details.model?.trim();

  console.log("validateBrandModel deviceType =", deviceType);
  console.log("Brand =", brandInput);
  console.log("Model =", modelInput);

  // If both fields are empty, nothing to validate
  if (!brandInput && !modelInput) return;

  // Normalize deviceType → correct key
  const key = typeKeyMap[deviceType.toLowerCase()];
  if (!key) {
    console.warn("Unknown deviceType mapping:", deviceType);
    return;
  }

  const typeList = brandModelData[key];
  if (!typeList) return;

  // iPhone special case (STRING ARRAY)
  if (key === "iPhones") {
    if (!modelInput) return; // optional

    const models = typeList as string[];
    const modelNormalized = normalizeString(modelInput);

    if (!models.some((m) => normalizeString(m) === modelNormalized)) {
      errors.push(`Model '${modelInput}' is not valid for iPhone.`);
    }
    return;
  }

  // All other devices → array of objects
  const brands = typeList as { brand: string; models: string[] }[];

  // Validate Brand (only if entered)
  let brandObj;
  if (brandInput) {
    brandObj = brands.find(
      (b) => normalizeString(b.brand) === normalizeString(brandInput)
    );
    if (!brandObj) {
      errors.push(`Brand '${brandInput}' is not valid for '${deviceType}'.`);
      return; // stop further validation if brand is invalid
    }
  }

  // Validate Model (only if entered)
  if (modelInput) {
    const modelNormalized = normalizeString(modelInput);

    if (brandObj) {
      // brand is valid → check model within brand
      const isModelValid = brandObj.models.some(
        (m) => normalizeString(m) === modelNormalized
      );
      if (!isModelValid) {
        errors.push(`Model '${modelInput}' is not valid for brand '${brandObj.brand}'.`);
      }
    } else {
      // brand not entered → check model across all brands
      const isModelValid = brands.some((b) =>
        b.models.some((m) => normalizeString(m) === modelNormalized)
      );
      if (!isModelValid) {
        errors.push(`Model '${modelInput}' is not valid for '${deviceType}'.`);
      }
    }
  }
};


    // --- DEVICE-SPECIFIC VALIDATION ---
    const validateDeviceFields = (
    deviceType: string,
    details: any,
    files: any
  ): string[] => {
    const errors: string[] = [];

      switch (deviceType) {

        // ------------------- LAPTOP -------------------
        case "Laptop": {
     
    
          // Processor
          if (details.Processor && details.Processor.trim() !== "") {
          if (details.Processor?.trim()) {
            const processor = details.Processor.trim().toLowerCase();
            const processorPattern =
               /^(intel\s*core\s*)?i[3579]([-\s]?\d+[a-zA-Z]*)?$|^(amd\s*ryzen\s*)?([3579]\d*)[a-zA-Z]*$/i;

            if (!processorPattern.test(processor)) {
              errors.push(
                `Invalid Processor. Try "Intel Core i5", "i7", "Ryzen 5 5600U".`
              );
            }
        }
      }
const ramKey = Object.keys(details).find(k => k.toLowerCase() === "ram");

// Only validate if user entered a value
if (ramKey && details[ramKey]?.toString().trim()) {
  const ramString = details[ramKey].toString().trim();
  const ram = parseInt(ramString.replace(/\D/g, ""), 10);
  const allowedRAM = [4, 8, 16, 32, 64];

  if (isNaN(ram) || !allowedRAM.includes(ram)) {
    errors.push(`RAM must be: ${allowedRAM.join(", ")} GB.`);
  }
}



        // Make it case-insensitive for safety
// Case-insensitive key check
const storageKey = Object.keys(details).find(k => k.toLowerCase() === "storage");

// Only validate if user entered a value
if (storageKey && details[storageKey]?.toString().trim()) {
  const storage = parseInt(details[storageKey].toString().trim(), 10);
  const allowed = [128, 256, 512, 1024, 2048];

  if (isNaN(storage) || !allowed.includes(storage)) {
    errors.push(`Storage must be: ${allowed.join(", ")} GB.`);
  }
}// Case-insensitive key check
const screenKey = Object.keys(details).find(k => k.toLowerCase() === "screensize");

// Only validate if a value is entered
if (screenKey && details[screenKey]?.toString().trim()) {
  const screen = parseFloat(details[screenKey].toString().trim());
  if (isNaN(screen) || screen <= 0 || screen > 20) {
    errors.push("Screen Size must be a number between 1 and 20 inches.");
  }
}
        // Graphics Card
        if (details["Graphics Card"]?.trim()) {
          const graphics = details["Graphics Card"].trim().toLowerCase();
          const knownCards = [
            "integrated",
            "intel uhd",
            "intel iris xe",
            "nvidia gtx 1650",
            "nvidia rtx 3060",
            "amd radeon rx 6600",
          ];

          const valid = knownCards.some((x) => x === graphics);
          const validPattern = /^(integrated|(intel|nvidia|amd)\s+[a-z0-9\s\-]+)$/i;

          if (!valid && !validPattern.test(graphics)) {
            errors.push("Enter valid Graphics Card like GTX 1650, RTX 3060, Radeon RX 6600.");
          }
        }

        break;
      }

      // ------------------- DESKTOP -------------------
      case "Desktop": {
       
// Processor (optional, validate only if entered)
if (details.Processor && details.Processor.trim() !== "") {
  const p = details.Processor.trim();
  const pattern =
    /^(intel|amd)?\s?(core\s)?(i[3579]|ryzen\s?[3579])(\s?\d{3,5}[a-zA-Z]?)?$/i;

  if (!pattern.test(p)) {
    errors.push("Invalid Processor. Example: Intel Core i5 or Ryzen 5.");
  }
}

       // RAM (optional → validate only if entered)
const ramKey = Object.keys(details).find(
  (k) => k.toLowerCase().replace(/\s+/g, "") === "ram"
);

if (ramKey && details[ramKey]?.toString().trim() !== "") {
  const ram = parseInt(details[ramKey].toString().replace(/\D/g, ""));
  const allowed = [4, 8, 16, 32, 64];

  if (isNaN(ram) || !allowed.includes(ram)) {
    errors.push(`RAM must be: ${allowed.join(", ")} GB.`);
  }
}
// Storage (optional → validate only if entered)
const storageKey = Object.keys(details).find(
  (k) => k.toLowerCase() === "storage"
);

if (storageKey && details[storageKey]?.toString().trim() !== "") {
  const storage = parseInt(details[storageKey].toString().trim(), 10);
  const allowed = [128, 256, 512, 1024, 2048];

  if (isNaN(storage) || !allowed.includes(storage)) {
    errors.push(`Storage must be: ${allowed.join(", ")} GB.`);
  }
}


     // Monitor Included (optional → validate only if entered)
const monitorKey = Object.keys(details).find(
  (k) => k.toLowerCase().replace(/\s+/g, "") === "monitorincluded"
);

if (monitorKey && details[monitorKey]?.toString().trim() !== "") {
  const val = details[monitorKey].trim().toLowerCase();
  if (val !== "yes" && val !== "no") {
    errors.push('Monitor Included must be "Yes" or "No".');
  }
}

        break;
      }

      // ------------------- MOBILE / TABLET / iPHONE -------------------
     case "Mobile":
case "Tablet":
case "iPhone": {
  // --- Brand (required for Mobile/Tablet only) ---
  if (deviceType !== "iPhone" && (!details.Brand || !details.Brand.toString().trim())) {
    errors.push("Brand is required.");
  }

  // --- Model (required for all) ---
  if (!details.Model || !details.Model.toString().trim()) {
    errors.push("Model is required.");
  }

  // --- Storage (optional, validate if entered) ---
  const storageKey = Object.keys(details).find(k => k.toLowerCase() === "storage");
  if (storageKey && details[storageKey]?.toString().trim()) {
    const storage = parseInt(details[storageKey].toString().replace(/\D/g, ""), 10);
    const allowedStorage = [8, 16, 32, 64, 128, 256, 512, 1024];
    if (isNaN(storage) || !allowedStorage.includes(storage)) {
      errors.push(`Storage must be one of: ${allowedStorage.join(", ")} GB.`);
    }
  }

  // --- RAM (Mobile only, required) ---
  if (deviceType === "Mobile") {
    const ramKey = Object.keys(details).find(
      k => k.toLowerCase().replace(/\s+/g, "") === "ram"
    );
    if (!ramKey || !details[ramKey]?.toString().trim()) {
      errors.push("RAM is required for Mobile.");
    } else {
      const ram = parseInt(details[ramKey].toString().replace(/\D/g, ""), 10);
      const allowedRAM = [2, 3, 4, 6, 8, 12, 16];
      if (isNaN(ram) || !allowedRAM.includes(ram)) {
        errors.push(`RAM must be one of: ${allowedRAM.join(", ")} GB.`);
      }
    }
  }

  // --- Battery Health (required, numeric 0-100) ---
  const batteryKey = Object.keys(details).find(
    k => k.toLowerCase().replace(/\s+/g, "") === "batteryhealth" ||
         k.toLowerCase().replace(/\s+/g, "") === "batteryhealth(%)"
  );
  if (!batteryKey || !details[batteryKey]?.toString().trim()) {
    errors.push("Battery Health is required.");
  } else {
    const batteryValue = Number(details[batteryKey]);
    if (isNaN(batteryValue) || batteryValue < 0 || batteryValue > 100) {
      errors.push("Battery Health must be between 0 and 100.");
    }
  }

  // --- Screen Size (Mobile/Tablet only, optional for iPhone) ---
  const screenKey = Object.keys(details).find(
    k => k.toLowerCase().replace(/\s+/g, "") === "screensize"
  );
  if ((deviceType === "Mobile" || deviceType === "Tablet") && screenKey && details[screenKey]?.toString().trim()) {
    const screenValue = parseFloat(details[screenKey].toString().replace(/[^\d.]/g, ""));
    if (isNaN(screenValue) || screenValue < 2 || screenValue > 20) {
      errors.push("Screen Size must be between 2 and 20 inches.");
    }
  }

  break;
}


  // ------------------- TV -------------------
case "TV": {
  const normalize = (k: string) => k?.toLowerCase().replace(/\s+/g, "");
  const get = (field: string) =>
    details[Object.keys(details).find((k) => normalize(k) === normalize(field))];

  const brand = get("brand");
  const model = get("model");
  const screenSize = get("screenSize");
  const displayType = get("displayType");
  const resolution = get("resolution");

 

  // Screen Size (required, numeric, 10–120 inches)
  if (!screenSize || !screenSize.toString().trim()) {
    errors.push("Screen Size is required for TV.");
  } else {
    const screen = parseFloat(screenSize.toString().replace(/[^\d.]/g, ""));
    if (isNaN(screen)) {
      errors.push("Screen Size must be a valid number.");
    } else if (screen < 10 || screen > 120) {
      errors.push("Screen Size must be between 10 and 120 inches.");
    }
  }

  // Display Type (required)
  if (!displayType || !displayType.toString().trim()) {
    errors.push("Display Type is required for TV.");
  } else {
    const validDisplays = ["LED", "OLED", "QLED", "LCD", "PLASMA"];
    if (!validDisplays.includes(displayType.toString().trim().toUpperCase())) {
      errors.push(`Display Type must be one of: ${validDisplays.join(", ")}.`);
    }
  }

  // Resolution (optional)
  if (resolution && resolution.toString().trim()) {
    const validRes = ["HD", "HD+", "FULL HD", "2K", "4K", "8K", "1080P", "1440P", "2160P"];
    if (!validRes.includes(resolution.toString().trim().toUpperCase())) {
      errors.push(`Resolution must be one of: ${validRes.join(", ")}.`);
    }
  }

  break;
}


    // ------------------- CPU -------------------
case "CPU": {
  // Brand (required)
  if (!details.Brand || details.Brand.toString().trim() === "") {
    errors.push("Brand is required for CPU.");
  }

  // Model (required)
  if (!details.Model || details.Model.toString().trim() === "") {
    errors.push("Model is required for CPU.");
  }

  // Cores/Threads (required + format)
  let cores = details.cores;
  if (cores !== undefined && cores !== null) {
    cores = cores.toString().trim();
  }

  if (!cores || cores.length === 0) {
    errors.push("Cores/Threads is required for CPU.");
  } else {
    // Validate proper number/number format
    const coresPattern = /^\d+\s*\/\s*\d+$/; // e.g., 6/12
    if (!coresPattern.test(cores)) {
      errors.push("Cores/Threads must be in format like 6/12.");
    }
  }

  break;
}

// ------------------- RAM -------------------
case "RAM": {
  // Brand (required)
  if (!details.Brand || details.Brand.toString().trim() === "") {
    errors.push("Brand is required for RAM.");
  }

  // Capacity (required + allowed values)
  const validCapacities = [2, 4, 8, 16, 32, 64, 128];
  const capacityValue = details.Capacity !== undefined ? Number(details.Capacity) : null;

  if (capacityValue === null || details.Capacity.toString().trim() === "") {
    errors.push("Capacity (GB) is required for RAM.");
  } else if (!validCapacities.includes(capacityValue)) {
    errors.push(`Capacity must be one of: ${validCapacities.join(", ")} GB.`);
  }

  // Type (required + DDR3-5)
  const ramType = details.type || details.Type;
  if (!ramType || ramType.toString().trim() === "") {
    errors.push("RAM Type is required.");
  } else if (!/^DDR[3-5]$/i.test(ramType.toString().trim())) {
    errors.push("Type must be DDR3, DDR4, or DDR5.");
  }

  // Speed (required + numeric)
  const ramSpeed = details.speed || details.Speed;
  if (!ramSpeed || ramSpeed.toString().trim() === "") {
    errors.push("RAM Speed is required.");
  } else if (!/^\d+$/.test(ramSpeed.toString().trim())) {
    errors.push("Speed must be numeric (e.g., 3200).");
  }

  break;
}


// ------------------- HARD DISK -------------------
case "Hard Disk": {
  // Brand (required)
  if (!details.Brand || details.Brand.toString().trim() === "") {
    errors.push("Brand is required for Hard Disk.");
  }

  // Capacity (required + numeric + GB/TB + range check)
  const capacity = details.capacity || details.Capacity;
  if (!capacity || capacity.toString().trim() === "") {
    errors.push("Capacity (GB/TB) is required for Hard Disk.");
  } else {
    const match = capacity.toString().trim().match(/^(\d+)\s*(GB|TB)?$/i);
    if (!match) {
      errors.push("Capacity must be numeric (e.g., 500GB or 1TB).");
    } else {
      let value = parseInt(match[1], 10);
      const unit = match[2] ? match[2].toUpperCase() : "GB";

      // Convert TB to GB for limit check
      if (unit === "TB") value *= 1024;

      if (value < 1 || value > 102400) { // 1GB to 100TB
        errors.push("Capacity must be between 1GB and 100TB.");
      }
    }
  }

  // Disk Type (required + format check)
  const type = details.diskType || details.DiskType;
  if (!type || type.toString().trim() === "") {
    errors.push("Disk type is required (HDD/SSD).");
  } else if (!/^(HDD|SSD)$/i.test(type.toString().trim())) {
    errors.push("Disk type must be HDD or SSD.");
  }

  break;
}

      // ------------------- iMac -------------------
     case "iMac": {
  const model = details.Model ?? details.model ?? "";

  if (!model.trim()) {
    errors.push("Model is required for iMac.");
  }

  // Processor
  const processor = details.Processor ?? details.processor ?? "";
  const procPattern = /^(m[1-4](\s?(pro|max|ultra)?)|intel\s?core\s?(i3|i5|i7|i9))/i;

  if (!processor.trim()) {
    errors.push("Processor is required for iMac.");
  } else if (!procPattern.test(processor.trim())) {
    errors.push("Processor must be a valid iMac processor (e.g., M1, M2, Intel Core i5).");
  }

  // RAM (Backend-matched logic)
  let ramValueRaw =
    (details.RAM ??
     details.Ram ??
     details.ram ??
     details.ramValue ??
     details.RAMValue ??
     "").toString().trim();

  if (!ramValueRaw) {
    errors.push("RAM is required for iMac.");
  } else {
    // CASE 1: only number "8"
    const onlyNumberMatch = ramValueRaw.match(/^(\d+)$/);
    if (onlyNumberMatch) {
      ramValueRaw = onlyNumberMatch[1] + " GB";
    }

    // CASE 2: number with GB (accept "8GB", "8 gb", "8   GB")
    const ramMatch = ramValueRaw.match(/^(\d+)\s*(gb)$/i);

    if (!ramMatch) {
      errors.push("RAM must be numeric in GB for iMac (e.g., 8, 8 GB, 16 GB).");
    } else {
      const ramValue = parseInt(ramMatch[1], 10);
      if (ramValue < 4 || ramValue > 64) {
        errors.push("RAM for iMac must be between 4 GB and 64 GB.");
      }
    }
  }

  break;
}


case "Apple Laptop": {
  const model = details.Model ?? details.model ?? "";
  if (!model.trim()) {
    errors.push("Model is required for Apple Laptop.");
  }

  // Processor
  const processor = details.Processor ?? details.processor ?? "";
  const procPattern = /^(M[1-4]\s?(Pro|Max)?|Intel\s?Core\s?(i3|i5|i7|i9))/i;

  if (!processor.trim()) {
    errors.push("Processor is required for Apple Laptop.");
  } else if (!procPattern.test(processor.trim())) {
    errors.push("Processor must be a valid Apple Laptop processor (e.g., M1, M2 Pro, Intel Core i7).");
  }

  // RAM
  let Ram =
    details.RAM ||
    details.Ram ||
    details.ram ||
    details.ramValue ||
    details.memory ||
    details.Memory ||
    details.memorySize ||
    "";

  let ramValueRaw = Ram.toString().trim();

  if (!ramValueRaw) {
    errors.push("RAM is required for Apple Laptop.");
  } else {
    const ramMatch = ramValueRaw.match(/^(\d+)\s*(GB)?$/i);

    if (!ramMatch) {
      errors.push("RAM must be numeric in GB for Apple Laptop (e.g., 8 GB, 16 GB).");
    } else {
      const ramValue = parseInt(ramMatch[1], 10);
      if (ramValue < 4 || ramValue > 128) {
        errors.push("RAM for Apple Laptop must be between 4 GB and 128 GB.");
      }
    }
  }

  break;
}

case "all-in-one pc": {
  const allbrand = details.Brand || details.brand || "";
  const allinmodel = details.Model || details.model || "";
  const processor = details.Processor || details.processor || "";
  const ram = details.RAM || details.ram || "";
  const storage = details.Storage || details.storage || "";

  // Brand & Model
  if (!allbrand.trim()) errors.push("Brand is required for All-in-One PC.");
  if (!allinmodel.trim()) errors.push("Model is required for All-in-One PC.");

  // Processor
  if (!processor.trim()) {
    errors.push("Processor is required for All-in-One PC.");
  } else if (!/^[a-zA-Z0-9\s\-]+$/.test(processor.trim())) {
    errors.push("Processor should contain only letters, numbers, spaces, and hyphens (e.g., Intel i5-12400).");
  }

  // RAM
  if (!ram.trim()) {
    errors.push("RAM is required for All-in-One PC.");
  } else {
    const ramMatch = ram.trim().match(/^(\d+)\s*(GB|TB)?$/i);
    if (!ramMatch) {
      errors.push("RAM must be numeric (e.g., 8GB, 16GB, 1TB).");
    } else {
      let ramValue = parseInt(ramMatch[1], 10);
      const unit = ramMatch[2] ? ramMatch[2].toUpperCase() : "GB";

      if (unit === "TB") ramValue *= 1024;

      if (ramValue < 2 || ramValue > 512) {
        errors.push("RAM must be between 2GB and 512GB.");
      }
    }
  }

  // Storage
  if (!storage.trim()) {
    errors.push("Storage is required for All-in-One PC.");
  } else {
    const storageMatch = storage.trim().match(/^(\d+)\s*(GB|TB)?$/i);
    if (!storageMatch) {
      errors.push("Storage must be numeric (e.g., 256GB, 1TB).");
    } else {
      let storageValue = parseInt(storageMatch[1], 10);
      const unit = storageMatch[2] ? storageMatch[2].toUpperCase() : "GB";

      if (unit === "TB") storageValue *= 1024;

      if (storageValue < 64 || storageValue > 10000) {
        errors.push("Storage must be between 64GB and 10TB.");
      }
    }
  }

  break;
}


case "Monitor": {
  if (!details.Brand?.trim()) {
    errors.push("Brand is required for Monitor.");
  }

  // Screen Size
  const screenSize = details.screenSize || details.ScreenSize;
  if (!screenSize) {
    errors.push("Screen Size is required for Monitor.");
  } else if (!/^\d+(\.\d+)?$/.test(screenSize)) {
    errors.push("Screen Size must be a number (e.g., 24, 27.5).");
  } else {
    const sizeValue = parseFloat(screenSize);
    if (sizeValue < 10 || sizeValue > 100) {
      errors.push("Screen Size must be between 10 and 100 inches.");
    }
  }

  // Resolution
  const resolution = details.Resolution || details.resolution;
  if (!resolution) {
    errors.push("Resolution is required for Monitor.");
  } else if (!/^\d{3,5}\s*([xX*])\s*\d{3,5}$/.test(resolution)) {
    errors.push("Resolution must be in the format WidthxHeight (e.g., 1920x1080).");
  }

  break;
}

case "Other": {
  const deviceName = details.deviceName || details.DeviceName;
  const specs = details.specs || details.Specs;

  // Device Name
  if (!deviceName || deviceName.trim() === "") {
    errors.push("Device Name is required for Other device type.");
  } else if (!/^[a-zA-Z0-9\s.,\-()]{3,100}$/.test(deviceName.trim())) {
    errors.push("Device Name must be meaningful, using letters, numbers, and common punctuation (3-100 characters).");
  }

  // Specs (optional)
  if (specs && specs.trim() !== "") {
    if (!/^[a-zA-Z0-9\s.,\-()]{3,300}$/.test(specs.trim())) {
      errors.push(
        "Key Specifications must be meaningful, using letters, numbers, and common punctuation (3-300 characters)."
      );
    }
  }

  break;
}

      
    }


    return errors;
  };
  



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

     const errors: string[] = [];

  // 1️⃣ Brand + Model validation FIRST
  validateBrandModel(deviceType, details, errors);
  console.log(deviceType)

  // If failed → show errors + stop
  if (errors.length > 0) {
    errors.forEach((msg) =>
      toast({
        title: "Validation Error fronend",
        description: msg,
        variant: "destructive",
      })
    );
    return;
  }
        if (!validate()) {
          return;
        }  
    
    setLoading(true);
    try {
      const apiBase = import.meta.env.VITE_API_BASE || "http://localhost:5000";
      const fd = new FormData();

      // ✅ Add shared fields safely
      fd.append("deviceType", deviceType);
      fd.append("name", shared.name.trim());
      fd.append("email", shared.email.trim());

      if (shared.phone?.trim()) fd.append("phone", shared.phone.trim());
      if (shared.condition?.trim()) fd.append("condition", shared.condition.trim());

      // ✅ Price validation (must be a valid number and reasonable range)
      if (shared.price) {
        const priceValue = Number(shared.price);
        if (isNaN(priceValue) || priceValue <= 0 || priceValue > 10000000) {
          toast({
            title: "Invalid Price",
            description: "Please enter a valid price (up to 10,00,000).",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        fd.append("price", String(priceValue));
      }

      // ✅ Description validation (only letters, numbers, punctuation)
      if (shared.description?.trim()) {
        const desc = shared.description.trim();
        const descriptionRegex = /^[A-Za-z0-9.,!?'"()\-\s]{2,200}$/;

        if (!descriptionRegex.test(desc)) {
          toast({
            title: "Invalid Description",
            description:
              "Description can only contain letters, numbers, and basic punctuation (2–200 characters).",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        fd.append("description", desc);
      }

      // ✅ Clean up and append details only if filled
      if (details && Object.keys(details).length > 0) {
        const cleanedDetails: Record<string, string> = {};
        for (const key in details) {
          if (details[key]?.toString().trim()) {
            cleanedDetails[key] = details[key].toString().trim();
          }
        }

        if (Object.keys(cleanedDetails).length > 0) {
          fd.append("details", JSON.stringify(cleanedDetails));
        }
      }

      // ✅ Append uploaded images
      if (files.length > 0) {
        files.forEach((file) => {
          fd.append("images", file);
        });
      }

      // ✅ Send request to backend
      const res = await fetch(`${apiBase}/api/sell-device`, {
        method: "POST",
        body: fd,
      });


      

      if (!res.ok) {
        const err = await res.json().catch(() => null);

        if (res.status >= 400 && res.status < 500) {
          console.log("🚨 Backend validation error:", err);

          const backendErrors =
            err.message ||
            err.error ||
            (Array.isArray(err.errors) ? err.errors.join("\n") : "Please check your inputs.");

          toast({
            title: "Validation Error",
            description: backendErrors,
            variant: "destructive",
          });

          setLoading(false);
          return;
        }

        toast({
          title: "Server Error",
          description: err?.message || "Something went wrong on the server.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // ✅ Success
      toast({
        title: "Success",
        description: "Your device has been submitted for quote.",
      });

      // ✅ Reset form
      setShared(defaultShared);
      setDetails(initDetailsFor(deviceType));
      setFiles([]);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: (err as Error).message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };


    // render a single field based on definition
    const renderField = (f: FieldDef) => {



      const value = details[f.name] ?? "";
      if (f.type === "textarea")
        return (
          <Textarea
            id={f.name}
            value={value}
            onChange={(e) => handleDetailChange(f.name, e.target.value)}
            placeholder={f.label}
            className="glass-card mt-2"
          />
        );

      if (f.type === "yesno")
        return (
          <Select
            value={value}
            onValueChange={(v) => handleDetailChange(f.name, v)}
          >
            <SelectTrigger className="glass-card mt-2">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        );

      // default input
      return (
        <Input
          id={f.name}
          value={value}
          type={f.type === "number" ? "number" : "text"}
          onChange={(e) => handleDetailChange(f.name, e.target.value)}
          placeholder={f.label}
          className="glass-card mt-2"
        />
      );
    };

    const template = DEVICE_TEMPLATES[deviceType] || [];

    return (
      <div className="min-h-screen">
        <Navigation />

        {/* Header Section - unchanged */}
        <section className="pt-32 pb-12 gradient-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
                <IndianRupee className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Get the Best Price</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Sell Your <span className="text-gradient">Device</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll provide you with a competitive
                quote for your device
              </p>
            </div>
          </div>
        </section>


        {/* Form Section */}
        <section className="py-20 w-full">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="glass-card glow-primary animate-fade-in ">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl ">Device Details</CardTitle>
                  <CardDescription>
                    Please provide accurate information about your device
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal / Universal Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div className="">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={shared.name}
                            onChange={(e) => handleSharedChange("name", e.target.value)}
                            placeholder="Name"
                            className="glass-card mt-2"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={shared.email}
                            onChange={(e) => handleSharedChange("email", e.target.value)}
                            placeholder="abc@example.com"
                            className="glass-card mt-2"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={shared.phone}
                          onChange={(e) => handleSharedChange("phone", e.target.value)}
                          placeholder="+91 "
                          className="glass-card mt-2"
                        />
                      </div>
                    </div>

                    {/* Device Selection + Shared */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Device Information</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div>
                          <Label htmlFor="deviceType">Device Type</Label>
                          <Select value={deviceType} onValueChange={(v) => { setDeviceType(v); setDetails(initDetailsFor(v)); }}>
                            <SelectTrigger className="glass-card mt-2">
                              <SelectValue placeholder="Select device type" />
                            </SelectTrigger>
                            <SelectContent>
                              {DEVICE_TYPES.map((t) => (
                                <SelectItem key={t} value={t}>{t}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="condition">Condition</Label>
                          <Select value={shared.condition} onValueChange={(v) => handleSharedChange("condition", v)}>
                            <SelectTrigger className="glass-card mt-2">
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="like-new">Like New</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="needs-repair">Needs Repair</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div>
                          <Label htmlFor="price">Expected Price</Label>
                          <Input
                            id="price"
                            type="number"
                            value={shared.price}
                            onChange={(e) => handleSharedChange("price", e.target.value)}
                            placeholder="₹"
                            className="glass-card mt-2"
                          />
                        </div>
                        <div className="mt3">
                          <Label htmlFor="images" className="">Upload Images (optional)</Label>
                          <input
                            id="images"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={onFilesChange}
                            className="mt-2"
                          />

                          <div className="mt-2 flex gap-2 flex-wrap">
                            {files.map((f, i) => (
                              <img
                                key={i}
                                src={URL.createObjectURL(f)}
                                alt={`preview-${i}`}
                                style={{ width: 100, height: 80, objectFit: "cover" }}
                                className="rounded"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                          <div className="col-span-1 md:col-span-2">
                          {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full glow-primary" disabled={loading}>
                      <Upload className="mr-2 h-5 w-5" />
                       {loading ? "Submitting..." : "Submit Info"}
                    </Button>
                    </div>
                    {/* Dynamic device fields */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Specific Fields For {deviceType} (Optional)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {template.map((f) => (
                          <div key={f.name}>
                            <Label htmlFor={f.name}>
                              {f.label} {f.required ? "*" : ""}
                            </Label>
                            <div className="mt-2">
                              {renderField(f)}
                            </div>
                          </div>
                        ))}
                        <div className="col-span-1 md:col-span-2">
                          <Label htmlFor="description">Additional Details</Label>
                          <Textarea
                            id="description"
                            value={shared.description}
                            onChange={(e) => handleSharedChange("description", e.target.value)}
                            placeholder="Any additional information about your device (optional)"
                            className="glass-card mt-2 min-h-[120px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" size="lg" className="w-full glow-primary" disabled={loading}>
                      <Upload className="mr-2 h-5 w-5" />
                      {loading ? "Submitting..." : "Submit for Quote"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section - unchanged */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: CheckCircle2,
                  title: "Quick Process",
                  description: "Get a quote within 24 hours",
                },
                {
                  icon: DollarSign,
                  title: "Best Prices",
                  description: "Competitive market rates",
                },
                {
                  icon: Laptop,
                  title: "All Brands",
                  description: "We accept all device brands",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="glass-card text-center glow-hover animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };

  export default SellDevice;
