import React from 'react';
import { PenTool, Box, Database } from 'lucide-react';

import imgKingSalman from '../assets/Images/Projects/KingSalmanAirport.jpg';
import imgMars from '../assets/Images/Projects/Mars.webp';
import imgDubai from '../assets/Images/Projects/DubaiMall.webp';
import imgFairmont from '../assets/Images/Projects/FairmontHotel.jpg';
import imgPortSaid from '../assets/Images/Projects/PortSaidAirport.jpg';
import imgAhlMasr from '../assets/Images/Projects/AhlMasrWalkway.jpg';
import imgCentralBus from '../assets/Images/Projects/CentralBusstation.jpeg';
import imgBoysen from '../assets/Images/Projects/BoysenFactory.jpg';
import imgChipsy from '../assets/Images/Projects/ChipsyFactory.jpg';
import imgCleopatra from '../assets/Images/Projects/CleopatraMall.webp';
import imgHilton from '../assets/Images/Projects/HiltonHotel.jpg';
import imgLavenir from '../assets/Images/Projects/L\'avenir.webp';
import imgGolfPalm from '../assets/Images/Projects/golfpalm.webp';
import imgZed from '../assets/Images/Projects/ZedClub.jpg';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: '3D Renders', href: '#gallery' },
];

export const skills = [
  { name: 'Technical Office & Design', icon: <PenTool size={32} color="var(--accent-gold)" />, desc: 'Shop Drawings, MTO/BOQ Preparation, Sheet Metal Design, and CNC Cutting Coordination.' },
  { name: '3D Modeling & CAD', icon: <Box size={32} color="var(--accent-blue)" />, desc: 'Expertise in 3ds Max, Inventor, Revit, and AutoCAD for electrical busbar systems.' },
  { name: 'Data & Automation', icon: <Database size={32} color="#10b981" />, desc: 'Power BI, Advanced Excel Modeling, and internal tools (HTML, CSS, JS, Tauri).' }
];

export const projects = [
  { title: 'King Salman Airport, KSA', desc: 'Extensive electrical busbar routing design and 3D modeling for massive aviation infrastructure. Delivered full shop drawings and CNC fabrication files.', tags: ['Busbar Design', '3D Modeling'], img: imgKingSalman },
  { title: 'New Mars Factory, Egypt', desc: 'Complete busbar trunking layouts and production coordination. Optimized routing for F&B industrial standards with precision MTOs.', tags: ['Shop Drawings', 'MTOs'], img: imgMars },
  { title: 'Dubai Mall, Egypt', desc: 'Commercial power distribution utilizing complex busbar joints and risers. Provided visualization and full delivery documentation.', tags: ['Busbar Joints', 'Coordination'], img: imgDubai },
  { title: 'Fairmont Hotel, KSA', desc: 'Luxury hospitality busbar systems design. Handled intricate vertical riser alignments, shop drawings, and fabrication support.', tags: ['Vertical Risers', 'Fabrication Support'], img: imgFairmont },
  { title: 'Port Said Airport, Egypt', desc: 'Aviation facility power mapping with heavy-duty busbar configurations. Issued accurate BOQs and CNC router cutting files.', tags: ['BOQs', 'CNC Layouts'], img: imgPortSaid },
  { title: 'Ahl Misr Walkway', desc: 'Custom busbar alignments for scenic public infrastructure. Provided material submittals and site-specific fabrication layouts.', tags: ['Busbar Alignments', 'Submittals'], img: imgAhlMasr },
  { title: 'Central Bus Station', desc: 'Detailed shop drawings and fabrication planning for station-wide electrical busbar distribution systems.', tags: ['Shop Drawings', 'Distribution'], img: imgCentralBus },
  { title: 'Boysen Factory', desc: 'Automotive industrial busbar design. Coordinated high-power routing, calculated voltage drops, and managed CNC layouts.', tags: ['Voltage Drop', 'CNC Layouts'], img: imgBoysen },
  { title: 'Chipsy Factory', desc: 'Massive scale snack plant busbar trunking. Handled complex layout coordination, sheet metal bend deductions, and MTO generation.', tags: ['Bend Deductions', 'Trunking'], img: imgChipsy },
  { title: 'Cleopatra Mall', desc: 'Commercial complex electrical routing. Created dynamic computational models for short-circuit limits in busbar runs.', tags: ['Short-Circuit Limits', 'Models'], img: imgCleopatra },
  { title: 'Hilton Hotel Hurghada', desc: 'Resort-scale power systems. Produced precise shop drawings for horizontal and vertical busbar intersections.', tags: ['Shop Drawings', 'Intersections'], img: imgHilton },
  { title: "L'avenir City", desc: 'Mega-city infrastructure. Coordinated busbar networks across diverse residential and commercial blocks with complete documentation.', tags: ['Busbar Networks', 'Documentation'], img: imgLavenir },
  { title: 'Golf Palm Hills', desc: 'Premium residential busbar distribution. Delivered 3D engineering models and seamless fabrication coordination.', tags: ['3D Models', 'Fabrication'], img: imgGolfPalm },
  { title: 'Zed East Club', desc: 'Sports facility power routing. Designed reliable busbar joints and trunking systems tailored to high-load recreational equipment.', tags: ['Busbar Joints', 'Trunking'], img: imgZed }
];
