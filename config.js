// Project content for the RoadwayVR SMRTTECH 4SC3 showcase template.
window.SITE_CONFIG = {
  pageTitle: "Kipling Avenue & Dixon Road | SUMO Traffic Study",
  hero: {
    courseTag: "SMRTTECH 4SC3",
    tagline: "Smart Cities and Communities",
    studentName: "Shengyao Xu",
    program: "Automation Engineering Technology, B.Tech.",
    university: "McMaster University",
    email: "shengyao.xu@example.com",
    profileImage: "assets/img/image1.jpg",
    imageAlt: "Aerial view of Kipling Avenue and Dixon Road with SUMO junction J1 marked.",
    place: "Kipling Avenue & Dixon Road",
    summary: "Would an all-automated fleet move faster through a Toronto traffic signal? Group 4 tested the same four-lane approach with human drivers, automated vehicles and a change in green time."
  },
  theme: {
    heroBg: "#102b32",
    heroText: "#f7faf4",
    pageBg: "#f9faf6",
    accent: "#c9ef74"
  },
  intro: {
    projectTitle: "SUMO roadway modelling and speed–density assessment at Kipling Avenue and Dixon Road, Toronto",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "assets/video/poster.jpg",
    heroVideoAlt: "SUMO simulation at junction J1, first showing yellow human-driven vehicles and then grey connected and autonomous vehicles.",
    videoCaption: "Each clip shows the same simulated period and camera view. Vehicle colour identifies the fleet."
  },
  caseStudy: {
    title: "Study design",
    backgroundTitle: "Background",
    backgroundBullets: [
      "Kipling Avenue meets Dixon Road at a signalized intersection in Toronto.",
      "Queues can form on the short approaches during a red phase.",
      "Group 4 reconstructed the streets and lane connections in SUMO.",
      "The course supplied the traffic demand assumptions."
    ],
    problemTitle: "Problem statement",
    problemBullets: [
      "Street geometry alone gives little information about queue discharge.",
      "The effect of an all-automated fleet on approach speed was uncertain.",
      "Allocating more green time to E61 also reduces green time for competing movements.",
      "Both tests needed a common baseline, measurement location and time window."
    ],
    objectivesTitle: "Project objectives",
    objectivesBullets: [
      "Select the study area and model its 100% human-driven baseline.",
      "Compare the two fleets’ speed–density relationships on edge E61.",
      "Evaluate a revised green split using the human-driven fleet.",
      "Present the methods and findings through a web showcase."
    ]
  },
  overview: {
    title: "From the network to the results",
    steps: [
      {
        title: "Select the study area",
        text: "Locate the assigned intersection and identify the upstream measurement edge.",
        image: "assets/img/image2.jpg",
        alt: "Group 4’s GIS overview marks the study intersection with a ring."
      },
      {
        title: "Build the HDV baseline",
        text: "Combine the road network, human-driven demand and a fixed-time signal in SUMO.",
        image: "assets/img/image3.jpg",
        alt: "SUMO lane geometry with the four lanes of E61 highlighted and an arrow pointing toward junction J1."
      },
      {
        title: "Change the fleet",
        text: "Repeat the baseline with the connected and autonomous vehicle type on all 12 flows.",
        image: "assets/img/image4.jpg",
        alt: "Schematic of the CAV following model, with a 0.60-second desired headway and a 1.50-metre minimum gap."
      },
      {
        title: "Reallocate green time",
        text: "Return to the HDV baseline and test a nine-second transfer between green phases.",
        image: "assets/img/image5.jpg",
        alt: "Stacked timing bars compare the baseline 27, 3, 27, 3 seconds with the intervention 36, 3, 18, 3 seconds."
      }
    ]
  },
  implementation: {
    title: "Method details",
    modules: [
      {
        title: "Study area and measurement point",
        bullets: [
          {text: "Use the course GIS image to locate Kipling Avenue and Dixon Road."},
          {text: "Trace the surrounding streets and their lane connections in NETEDIT."},
          {text: "Select E61, a four-lane approach to junction J1 with a declared lane length of 43.42 m."}
        ]
      },
      {
        title: "Baseline inputs",
        bullets: [
          {text: "Assign 750 vehicles per hour to each of four origins, for 3,000 veh/h of nominal demand."},
          {text: "Set the signal phases to 27, 3, 27 and 3 seconds, and assign HDVs to all 12 flows."},
          {text: "Use a 0.2-second simulation step and collect E61 edge data every 100 seconds."}
        ]
      },
      {
        title: "Controlled comparison",
        bullets: [
          {text: "Keep the network, flow rates, routing specifications and signal schedule fixed."},
          {text: "Use cooperative adaptive cruise control (CACC) with a desired headway of 0.60 s and a minimum gap of 1.50 m."},
          {text: "Plot speed against total edge density for 36 matched intervals, including startup."}
        ]
      },
      {
        title: "Signal intervention",
        bullets: [
          {text: "Extend the green serving E61 from 27 to 36 seconds."},
          {text: "Shorten the competing green from 27 to 18 seconds and retain both 3-second yellow phases."},
          {text: "Compare E61 with its original HDV baseline over the same simulated hour."}
        ]
      }
    ]
  },
  results: {
    title: "Speed and density on E61",
    subtitle: "Each marker represents one 100-second interval during the first simulated hour, including startup. Both graphs use the same axes. Density totals vehicles across all four lanes. Each line is a least-squares fit over the observed range.",
    charts: {
      left: {
        title: "Base · 100% HDV",
        src: "assets/img/image6.jpg",
        alt: "Base scenario on E61. Across 36 intervals, speed declines as density rises. Mean speed is 3.562 m/s and mean density is 63.077 veh/km."
      },
      right: {
        title: "Scenario 1 · 100% AV/CAV",
        src: "assets/img/image7.jpg",
        alt: "Scenario 1 on E61, using the same axes as the baseline. Mean speed is 3.576 m/s and mean density is 64.830 veh/km."
      }
    },
    rows: [
      ["Mean interval speed (m/s)", "3.562", "3.576", "4.990"],
      ["Mean edge density (veh/km)", "63.077", "64.830", "44.455"],
      ["Vehicle-time-weighted speed (m/s)", "3.362", "3.310", "4.629"]
    ],
    discussionBullets: [
      "Mean interval speed increased by just 0.014 m/s in the CAV run. Weighting by the time vehicles spent on E61 reversed the ordering, with HDVs averaging 3.362 m/s and CAVs 3.310 m/s.",
      "With HDVs and nine extra seconds of green, mean speed on E61 rose to 4.990 m/s and mean density fell to 44.455 veh/km. Competing approaches gave up the same nine seconds.",
      "The findings describe one run per condition on one short approach. Testing the timing plan for the whole intersection would require observed traffic counts, repeated runs and delay measurements on the other approaches."
    ],
    dataUrl: "assets/data/E61_intervals.csv"
  },
  team: {
    title: "Author and acknowledgments",
    members: [{name: "Shengyao Xu", role: "Lab 5 web showcase, results analysis and visualization"}],
    acknowledgments: [
      "Group 4 supplied the Mini Project A report, study imagery, SUMO models and archived edge measurements.",
      "Course instructor: Dr. Marjan Alavi. Lab instructor: Dr. Ahmad Mohammadi."
    ],
    repoLabel: "Project repository",
    repoUrl: "https://github.com/Shengyao122/smartcity-projecta.github.io"
  },
  disclaimer: {
    short: "McMaster University coursework based on simulated traffic and assumed demand."
  },
  footer: {
    templateCredit: "Showcase template by RoadwayVR",
    templateCreditUrl: "https://roadwayvr.com"
  }
};
