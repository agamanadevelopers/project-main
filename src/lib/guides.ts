// lib/guides.ts
// Single source of truth for every guide page.
// Each guide is a long-form, keyword-targeted piece of content written in
// Agamana's voice: short punchy sentences, direct second-person, conversational.

export interface GuideSection {
  id: string;
  heading: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  category: string;
  keyTakeaways: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}

export const guides: Guide[] = [
  {
    slug: "dc-conversion-karnataka",
    title: "DC Conversion in Karnataka: Complete Guide for Land Owners (2025)",
    metaDescription:
      "Step-by-step guide to DC conversion in Karnataka. Learn how to convert agricultural land to residential, documents needed, timelines, costs and common mistakes to avoid.",
    h1: "DC Conversion in Karnataka: What Every Land Owner Needs to Know",
    intro:
      "You own agricultural land. You want to build a residential layout on it. Before anything else, you need DC conversion. This guide walks you through the entire process: what it is, what you need, what it costs, and where people get stuck.",
    publishedDate: "2025-07-15",
    updatedDate: "2025-08-01",
    readingTime: "12 min read",
    category: "Land Development",
    keyTakeaways: [
      "DC conversion changes your land's classification from agricultural to non-agricultural (residential, commercial or industrial).",
      "The process runs through the Deputy Commissioner's office in your district. That is where the name comes from.",
      "Typical timelines in Karnataka range from 3 to 8 months, depending on the district and completeness of your documents.",
      "Getting it wrong, or skipping it altogether, can stall your entire project and attract penalties.",
    ],
    sections: [
      {
        id: "what-is-dc-conversion",
        heading: "What is DC Conversion?",
        body: [
          "DC conversion is the process of changing your land's official use from agricultural to non-agricultural. \"DC\" stands for Deputy Commissioner, the district-level authority who approves the change.",
          "In Karnataka, all agricultural land falls under the Karnataka Land Revenue Act, 1964. If you want to use that land for anything other than farming (a residential layout, a commercial project, even a farmstay), you need the DC's office to formally reclassify it.",
          "Without this conversion, you cannot get layout approval. You cannot register plots. You cannot legally sell residential sites on agricultural land. It is the first legal step in any land development project.",
        ],
      },
      {
        id: "who-needs-dc-conversion",
        heading: "Who Needs DC Conversion?",
        body: [
          "If your land is classified as agricultural in the revenue records (RTC) and you want to develop it into a residential layout or plotted project, you need DC conversion.",
          "This applies whether you own 2 acres in Sagara or 50 acres near Shivamogga. The size does not matter. What matters is the current land classification and your intended use.",
          "If your land is already classified as non-agricultural (for example, land within a city corporation or town municipal council limit that was already converted), you may not need this step. Check your RTC extract. It will show the current classification.",
        ],
      },
      {
        id: "documents-required",
        heading: "Documents Required for DC Conversion",
        body: [
          "This is where most land owners lose time. Missing even one document sends you back to the starting line. Here is what you need:",
          "RTC (Record of Rights, Tenancy and Crops): your current land record, available through Bhoomi. This must be recent, usually within the last 6 months.",
          "Mutation extract: proof that the land is registered in your name. If you inherited the land, make sure the mutation from the previous owner to your name is complete.",
          "Survey sketch and tippani: the official survey map of your land, obtained from the Land Survey Department.",
          "Tax paid receipts: proof that all land revenue and taxes are cleared. Any pending dues will hold up the application.",
          "Encumbrance Certificate (EC): shows whether the land has any legal liabilities, mortgages or pending litigation. Get this from the Sub-Registrar's office for the last 13 to 30 years.",
          "Aadhaar card and PAN card: identity documents of all land owners listed in the RTC.",
          "Khata extract: if the land falls within a local body (Gram Panchayat, Town Panchayat), you will need the khata from that body.",
          "Zonal certificate: confirms the land falls in a zone that permits the intended use. Obtained from the local planning authority.",
          "No Objection Certificates (NOCs): depending on the location, you may need NOCs from the Forest Department, Pollution Control Board, or Revenue Department.",
        ],
      },
      {
        id: "step-by-step-process",
        heading: "The DC Conversion Process, Step by Step",
        body: [
          "Step 1: Verify your land records. Before applying, confirm your RTC is updated, mutations are complete, and there are no disputes or encumbrances. This saves months of back-and-forth later.",
          "Step 2: Gather all documents. Use the checklist above. Get every document in order before you file. Incomplete applications are the number one cause of delays.",
          "Step 3: Submit your application. File the application at the Deputy Commissioner's office in your district (Shivamogga, Uttara Kannada, or whichever district your land falls in). Pay the prescribed application fee.",
          "Step 4: Site inspection. The Tahsildar or a designated revenue officer will visit your land to verify boundaries, check for encroachments, and confirm the details in your application match the ground reality.",
          "Step 5: Revenue Department report. Based on the inspection, the Tahsildar submits a report to the DC's office. This report covers land classification, soil type, surrounding land use, and whether the conversion is appropriate.",
          "Step 6: DC order. If everything checks out, the Deputy Commissioner issues a conversion order. This order specifies the new land use (residential, commercial, etc.) and any conditions attached.",
          "Step 7: Update your records. Once you have the DC order, get your RTC updated to reflect the new land classification. This is done through the Bhoomi portal or the Tahsildar's office. Do not skip this step. Your RTC must match the DC order before you proceed to layout approval.",
        ],
      },
      {
        id: "timelines-and-costs",
        heading: "Timelines and Costs",
        body: [
          "Timelines vary by district and how clean your paperwork is. In our experience working across Sagara, Shivamogga and Sirsi:",
          "Best case: 3 to 4 months, when all documents are in order, no disputes exist, and the district office is not backlogged.",
          "Typical case: 5 to 6 months. Minor document corrections, a re-inspection, or seasonal delays at the DC office.",
          "Worst case: 8 months or more. Disputed ownership, pending mutations, missing NOCs, or land located in a sensitive zone (forest fringe, wetland buffer, etc.).",
          "As for costs, the government fees for DC conversion in Karnataka include an application fee and a conversion fee. The conversion fee is typically calculated as a percentage of the land's guidance value (jantri rate). Expect to pay between ₹5,000 and ₹50,000 depending on your land's value and area. Professional fees for documentation and liaison are separate.",
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes That Delay DC Conversion",
        body: [
          "Applying with outdated RTCs. Your RTC must be current. If you downloaded it a year ago, get a fresh one.",
          "Incomplete mutations. If you inherited land from a parent or purchased it recently, the mutation must be complete and reflected in the RTC before you apply for conversion. This alone can add 2 to 3 months if not done in advance.",
          "Ignoring encumbrances. If the EC shows a mortgage or pending case, the DC office will not process your application until it is cleared. Check this before you start.",
          "Wrong zonal classification. Some land falls in zones where residential development is restricted, near forests, water bodies, or heritage sites. A zonal certificate from the local planning authority will tell you upfront whether conversion is possible.",
          "Not following up. Government offices handle hundreds of applications. If you do not follow up regularly, your file can sit idle for months. Having someone who knows the process and the office makes a real difference.",
        ],
      },
      {
        id: "dc-conversion-vs-layout-approval",
        heading: "DC Conversion vs Layout Approval: What is the Difference?",
        body: [
          "People often confuse these two. They are sequential steps, not the same thing.",
          "DC conversion changes your land's classification. It says: this land can now be used for residential purposes.",
          "Layout approval is the next step. It says: this specific plan, with these roads, these plot sizes, these open spaces, is approved for construction and sale.",
          "You cannot apply for layout approval without completing DC conversion first. Think of DC conversion as the permission to change, and layout approval as the permission to build.",
          "Once both are done, you can register individual plots and sell them legally. Skipping either step, or doing them out of order, puts the entire project at legal risk.",
        ],
      },
      {
        id: "how-agamana-helps",
        heading: "How Agamana Projects Helps with DC Conversion",
        body: [
          "We handle the entire process. From the first document audit to the final RTC update, we manage every step so you do not have to chase paperwork across three different offices.",
          "We start with a document review. We check what you have, what is missing, and what needs to be corrected before filing. This prevents the most common delays.",
          "We prepare and file the application, coordinate with the Tahsildar for the site inspection, and follow up with the DC office until the order is issued.",
          "We also handle the post-conversion steps: updating your RTC and preparing the ground for layout approval, which is usually the next step in your project.",
          "We work across Sagara, Shivamogga, Sirsi and the wider Karnataka region. If you own land and want to understand your options, we are happy to talk.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does DC conversion take in Karnataka?",
        a: "Typically 3 to 8 months, depending on the district and how complete your documents are. Clean paperwork with no disputes can clear in 3 to 4 months.",
      },
      {
        q: "Can I develop a residential layout without DC conversion?",
        a: "No. If your land is classified as agricultural, you must complete DC conversion before applying for layout approval. Selling residential plots on unconverted land is illegal.",
      },
      {
        q: "What is the cost of DC conversion in Karnataka?",
        a: "Government fees are typically calculated as a percentage of the land's guidance value (jantri rate), usually ranging from ₹5,000 to ₹50,000 depending on the land area and location.",
      },
      {
        q: "Can I do DC conversion myself without a consultant?",
        a: "You can. But the process involves multiple departments: revenue, survey, local body, and the DC office. Missing a single document or step can add months. Most land owners work with an experienced partner to avoid these delays.",
      },
      {
        q: "Is DC conversion required for farmland plots (farm stays)?",
        a: "If you are selling individual plots for non-agricultural use, yes. The rules around farm plots and farmstays are evolving, so check with the local planning authority for your specific case.",
      },
      {
        q: "What happens after DC conversion is approved?",
        a: "Update your RTC to reflect the new classification. Then proceed to layout planning and layout approval, the next steps in developing your land into a residential project.",
      },
    ],
  },
  {
    slug: "how-to-develop-land-into-plots-karnataka",
    title: "How to Develop Land into Plots in Karnataka: Step-by-Step Guide (2025)",
    metaDescription:
      "Complete guide to developing raw land into residential plots in Karnataka. From feasibility and DC conversion to layout approval, infrastructure and launch.",
    h1: "How to Develop Land into Plots in Karnataka",
    intro:
      "You have land. Maybe it has been in your family for years. Maybe you bought it as an investment. Either way, you are wondering: can I turn this into a residential layout and sell plots? The answer is usually yes, but the process matters. This guide covers every step, from the first feasibility check to the day you launch.",
    publishedDate: "2025-07-20",
    updatedDate: "2025-08-01",
    readingTime: "15 min read",
    category: "Land Development",
    keyTakeaways: [
      "Developing land into plots involves 7 distinct phases. Skipping any one can stall or derail the project.",
      "Feasibility comes first: not every piece of land is suited for residential development.",
      "DC conversion and layout approval are the two critical legal gates before you can sell a single plot.",
      "Infrastructure, branding and marketing are what separate a project that sells from one that sits idle.",
    ],
    sections: [
      {
        id: "can-your-land-be-developed",
        heading: "Can Your Land Be Developed? Start with Feasibility",
        body: [
          "Not every piece of land can become a residential layout. Before you spend money on approvals or planning, you need to know whether the land is viable.",
          "Location matters. Land near a town or along a connecting road has demand. Land deep in a rural area with no road access is much harder to sell, no matter how cheap the plots.",
          "Zoning matters. Your land must fall in a zone that permits residential development. Check with the local Town Planning authority or Gram Panchayat. Land near forests, water bodies, or restricted areas may not qualify.",
          "Size matters. A layout typically needs at least 1 to 2 acres to be financially viable. You need enough space to carve out plots, roads, and open spaces while keeping the cost per plot attractive to buyers.",
          "Legal clarity matters. All ownership records must be clean: updated RTC, completed mutations, no encumbrances, no pending litigation. If multiple family members own the land, get everyone on the same page before you begin.",
          "We do this feasibility assessment for every project we take on. It takes a site visit, a records check, and a quick market scan. If the land is not viable, we tell you upfront. No point investing in a project that will not work.",
        ],
      },
      {
        id: "dc-conversion",
        heading: "Step 1: DC Conversion (Change the Land Use)",
        body: [
          "If your land is classified as agricultural (check your RTC), the first legal step is DC conversion. This changes the classification to non-agricultural so it can be used for residential plots.",
          "This process runs through the Deputy Commissioner's office in your district. You will need your RTC, mutation extract, survey sketch, encumbrance certificate, tax receipts, and a zonal certificate.",
          "The timeline is typically 3 to 8 months. The most common delays are incomplete documents and pending mutations.",
          "We have a detailed guide on this: DC Conversion in Karnataka: What Every Land Owner Needs to Know.",
        ],
      },
      {
        id: "layout-planning",
        heading: "Step 2: Layout Planning (Design the Project)",
        body: [
          "Once your land use is sorted, you design the layout. This is not just drawing lines on a map. A good layout plan considers:",
          "Plot sizes that match local demand. In Sagara and surrounding areas, buyers often look for 30x40 and 30x50 sites. Near Shivamogga, slightly larger plots move well. Your layout must reflect what the market wants.",
          "Road network. Internal roads need to meet minimum width requirements (typically 9 metres for main roads, 6 metres for cross roads). The layout must connect to an existing public road.",
          "Open spaces and amenities. Karnataka regulations require a percentage of the total area to be reserved as open space. Smart planning turns this requirement into an amenity like a park or community space that adds value to surrounding plots.",
          "Infrastructure planning. Where will water come from? How will drainage work? Where do electrical lines enter? These decisions are made during layout planning, not after.",
          "A well-designed layout sells faster, commands better prices, and clears the approval process more smoothly. A rushed layout creates problems at every stage that follows.",
        ],
      },
      {
        id: "layout-approval",
        heading: "Step 3: Layout Approval (Get It on Record)",
        body: [
          "Layout approval is the formal permission from the planning authority to develop your land according to the plan you designed.",
          "Depending on where your land is, the approving authority could be the Gram Panchayat, Town Panchayat, City Municipal Council, or the District Town Planning office.",
          "You submit your layout plan along with technical drawings, site survey data, and the DC conversion order. The authority reviews the plan, checks it against local development regulations, and may request changes.",
          "Typical timelines: 2 to 6 months after DC conversion, depending on the authority and the complexity of the layout.",
          "Once approved, you receive a layout approval order and an approved plan. This is the document that lets you legally register and sell individual plots.",
          "Do not skip this step. Selling plots from an unapproved layout is illegal under the Karnataka Town and Country Planning Act. It also puts your buyers at risk. Their loans, construction approvals, and resale ability all depend on a properly approved layout.",
        ],
      },
      {
        id: "infrastructure",
        heading: "Step 4: Infrastructure (Build What You Promised)",
        body: [
          "A layout on paper means nothing if the site is still raw land. Buyers want to see real infrastructure before they commit.",
          "Roads. Levelling, grading, and laying internal roads to the approved specifications. This includes proper drainage alongside the roads.",
          "Water supply. Either a connection to the local municipal water system or borewells with a distribution network to each plot.",
          "Electricity. Power lines brought to the layout boundary and distribution infrastructure to individual plots. This involves coordination with HESCOM or CESCOM depending on your district.",
          "Fencing and boundary markers. Clear boundaries for each plot, marked with permanent survey stones as per the approved layout.",
          "The quality of infrastructure directly affects how quickly you sell plots and the price you can command. Cutting corners here is a false economy.",
        ],
      },
      {
        id: "branding-and-marketing",
        heading: "Step 5: Branding and Marketing (Make the Project Known)",
        body: [
          "This is where most land owners struggle. You have a great layout, solid infrastructure, all approvals in place. But nobody knows about it.",
          "Branding gives your project an identity. A name, a visual language, a story that connects with buyers. \"Ramesh's Layout\" does not inspire confidence. A well-branded project with professional collateral does.",
          "Marketing gets the word out. In Tier 2 and Tier 3 Karnataka towns, this means a mix of digital presence (a project website, social media, Google visibility) and local outreach (banners, newspaper ads, word-of-mouth through local networks).",
          "Most projects in this region rely entirely on brokers and word-of-mouth. That limits your reach and your control over the narrative. A branded project with a direct marketing channel gives you both reach and credibility.",
          "We handle branding and marketing as part of our end-to-end service. You do not need to hire separate agencies or figure out digital marketing on your own.",
        ],
      },
      {
        id: "sales-launch",
        heading: "Step 6: Launch (Bring It to Market)",
        body: [
          "The launch is when your project officially opens for sale. It is not just putting up a \"plots available\" sign. A well-planned launch creates urgency and momentum.",
          "Pre-launch: Build a list of interested buyers through your marketing efforts. Give early enquirers a reason to commit, like an early-bird advantage, a limited-time offer, or priority choice of plots.",
          "Launch event: A site visit day where serious buyers can walk the layout, see the infrastructure, meet the team, and make booking decisions on the spot.",
          "Post-launch: Follow up with leads, handle documentation for booked plots, and continue marketing for remaining inventory.",
          "The first 30 days after launch are critical. A project that sells 40 to 50% of its inventory in the first month builds market confidence. One that sells slowly creates doubt.",
        ],
      },
      {
        id: "how-long-does-it-take",
        heading: "How Long Does the Entire Process Take?",
        body: [
          "From raw land to launch, a typical project in Karnataka takes 12 to 18 months. Here is a rough breakdown:",
          "DC conversion: 3 to 8 months. Layout planning and approval: 3 to 6 months (can overlap with later stages of DC conversion). Infrastructure: 2 to 4 months. Branding, marketing, and launch preparation: 1 to 3 months (runs in parallel with infrastructure).",
          "The biggest variable is the approval stages. Clean paperwork and experienced guidance can shave months off the timeline. Disputes, missing documents, or unclear ownership can double it.",
          "We have seen projects go from land to launch in under 10 months. We have also seen projects take over 2 years because of ownership disputes that should have been resolved before starting.",
        ],
      },
      {
        id: "why-work-with-a-partner",
        heading: "Why Work with a Development Partner?",
        body: [
          "You can do all of this yourself. Plenty of land owners do. But there is a reason most first-time developers struggle.",
          "The process touches multiple government departments, requires technical expertise in layout design and infrastructure, demands marketing skills to sell the finished product, and takes sustained follow-up over 12 to 18 months.",
          "A development partner like Agamana handles all of this under one roof. You stay involved in key decisions like pricing, design choices, and timeline, without having to manage every moving part yourself.",
          "We are not builders. We are not brokers. We do not buy your land. We partner with you to develop and launch your project, and we stay until the job is done.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to develop land into plots?",
        a: "Costs vary widely based on land size, location, and infrastructure scope. A rough range for Karnataka: ₹8 to ₹15 lakhs per acre for a basic residential layout including roads, water, electricity, fencing, and approvals. Branding and marketing are additional.",
      },
      {
        q: "Can I develop less than 1 acre?",
        a: "Technically yes, but it is rarely viable. After allocating land for roads and open spaces, very small layouts leave too few plots to cover costs. We typically recommend a minimum of 1.5 to 2 acres.",
      },
      {
        q: "Do I need to be present throughout the project?",
        a: "Not if you have a partner managing the project. We provide regular updates and involve you in key decisions, but day-to-day coordination, site visits, and government liaisons are handled by our team.",
      },
      {
        q: "What if my land has multiple owners?",
        a: "All owners must consent to the development. Get a legal agreement in place between all parties before starting. Unresolved ownership issues are the single biggest cause of project delays.",
      },
      {
        q: "Is RERA registration required for plotted layouts in Karnataka?",
        a: "Yes, if the layout exceeds the threshold specified under Karnataka RERA rules. Registration with Karnataka RERA gives buyers legal protection and adds credibility to your project.",
      },
      {
        q: "How do I choose the right plot sizes for my layout?",
        a: "It depends on local demand. In smaller towns like Sagara and Sirsi, 30x40 and 30x50 sites are popular. Near Shivamogga or larger towns, buyers may prefer slightly larger plots. We study the local market before recommending plot sizes.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
