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
  {
    slug: "layout-approval-process-karnataka",
    title: "Layout Approval Process in Karnataka: Complete Guide (2025)",
    metaDescription:
      "Step-by-step guide to getting layout approval in Karnataka. Covers documents, authorities, timelines, costs and common mistakes for residential plotted developments.",
    h1: "Layout Approval Process in Karnataka: A Step-by-Step Guide",
    intro:
      "You have converted your land. You have a layout plan on paper. Now you need the one document that makes it all legal: layout approval. Without it, you cannot register plots, you cannot sell them, and buyers cannot get loans on them. This guide covers exactly how layout approval works in Karnataka, who grants it, what you need, and how long it takes.",
    publishedDate: "2025-08-03",
    updatedDate: "2025-08-03",
    readingTime: "11 min read",
    category: "Land Development",
    keyTakeaways: [
      "Layout approval is the legal permission to divide land into plots and sell them. Without it, plot sales are illegal under the Karnataka Town and Country Planning Act.",
      "The approving authority depends on your land's location: Gram Panchayat, Town Panchayat, City Municipal Council, or District Town Planning office.",
      "You need DC conversion completed before you can apply for layout approval.",
      "Typical timelines range from 2 to 6 months after DC conversion, depending on the authority and completeness of your documents.",
    ],
    sections: [
      {
        id: "what-is-layout-approval",
        heading: "What is Layout Approval?",
        body: [
          "Layout approval is the formal permission from a planning authority to divide a piece of land into individual plots for sale. It confirms that your layout plan meets all local development regulations: road widths, plot sizes, open space requirements, drainage, and utilities.",
          "In Karnataka, this falls under the Karnataka Town and Country Planning Act, 1961. The Act makes it illegal to form a layout or sell plots without prior approval from the competent planning authority.",
          "Think of it this way. DC conversion gives you permission to change what the land is used for. Layout approval gives you permission to build and sell a specific plan on that land.",
        ],
      },
      {
        id: "who-grants-layout-approval",
        heading: "Who Grants Layout Approval?",
        body: [
          "The approving authority depends on where your land is located. This is one of the most confusing parts for first-time developers, so here is a clear breakdown.",
          "Gram Panchayat: if your land falls within a Gram Panchayat jurisdiction (rural area), the GP is the first point of contact. For smaller layouts under certain thresholds, the GP can issue approval directly. Larger layouts may need to go through the District Town Planning authority.",
          "Town Panchayat or City Municipal Council (CMC): if your land is within a town or city limit, the local urban body handles approvals. They have a town planning department that reviews layout applications.",
          "District Town Planning authority: for larger layouts or land that falls under regional planning jurisdiction, the District Town Planning office under the Urban Development department is the competent authority.",
          "BDA, MUDA, or other Development Authorities: in Bengaluru (BDA), Mysuru (MUDA), and a few other cities, a dedicated development authority handles layout approvals within their jurisdiction. For most of Karnataka's Tier 2 and Tier 3 towns, this does not apply.",
          "Not sure which authority covers your land? Check the local master plan or contact the district Town Planning office. Getting this wrong wastes months.",
        ],
      },
      {
        id: "documents-required",
        heading: "Documents Required for Layout Approval",
        body: [
          "You will need a substantial set of documents. Missing even one can send your application back. Here is the full list.",
          "DC conversion order: proof that the land has been converted from agricultural to non-agricultural use. This is a prerequisite. Without it, your application will not be accepted.",
          "Updated RTC (Record of Rights): must reflect the converted land use and current ownership.",
          "Survey sketch and tippani: the official survey map from the Land Survey Department.",
          "Encumbrance Certificate (EC): covering at least the last 13 years. Must show no pending litigation, mortgages, or claims.",
          "Layout plan: a detailed plan drawn by a licensed surveyor or engineer. This must include plot dimensions, road widths, open spaces, drainage lines, and utility corridors. Most authorities require this at a specific scale (usually 1:500 or 1:1000).",
          "Zonal certificate: confirms the land falls in a zone that permits residential development.",
          "Soil test report: some authorities require a geotechnical report, especially for larger layouts.",
          "NOCs (No Objection Certificates): depending on the location, you may need NOCs from the Forest Department, Pollution Control Board, Fire Department, or Highway authority (if the land fronts a national or state highway).",
          "Tax paid receipts: all property tax and land revenue must be current.",
          "Identity documents: Aadhaar and PAN of all land owners.",
        ],
      },
      {
        id: "step-by-step-process",
        heading: "The Layout Approval Process, Step by Step",
        body: [
          "Step 1: Prepare the layout plan. Hire a licensed surveyor or civil engineer to draw up the layout. The plan must comply with local development regulations on minimum plot sizes, road widths, and open space percentages. In most Karnataka jurisdictions, minimum road width is 9 metres for main roads and 6 metres for cross roads. Open space must be at least 10% of the total area.",
          "Step 2: Gather all documents. Use the checklist above. Every document must be current and accurate. Outdated RTCs or incomplete ECs are the most common reasons for rejection.",
          "Step 3: Submit the application. File at the appropriate authority (see the section above). Pay the prescribed application fee, which varies by authority and layout size.",
          "Step 4: Scrutiny and site inspection. The planning authority reviews your documents and sends an officer to inspect the site. They verify boundaries, check for encroachments, confirm road access, and assess drainage feasibility.",
          "Step 5: Technical review. The authority's technical team reviews the layout plan against development regulations. They may request modifications: wider roads, more open space, different plot configurations, or changes to drainage design.",
          "Step 6: Conditional or final approval. If the plan meets all requirements, the authority issues a layout approval order. Sometimes this comes with conditions (complete certain infrastructure before selling, deposit a bank guarantee, etc.). Meet the conditions and get the final unconditional approval.",
          "Step 7: Layout registration. Once approved, the layout plan is registered with the Sub-Registrar's office. This creates a legal record that individual plots within the layout can be registered and sold.",
        ],
      },
      {
        id: "timelines-and-costs",
        heading: "Timelines and Costs",
        body: [
          "Timelines depend heavily on the authority and the complexity of your layout. Based on our experience across Sagara, Shivamogga, and Sirsi:",
          "Best case: 2 to 3 months. Small layout, clean documents, cooperative authority with no backlog.",
          "Typical case: 3 to 5 months. One or two rounds of modifications requested, some document corrections needed.",
          "Worst case: 6 months or more. Complex layout, multiple NOCs required, authority backlog, or technical objections that require redesign.",
          "Costs include the application fee, scrutiny fee, and layout approval fee charged by the authority. These vary by jurisdiction but typically range from ₹10,000 to ₹1,00,000 depending on the layout size and the authority. You will also pay for the licensed surveyor/engineer who prepares the layout plan and technical drawings.",
        ],
      },
      {
        id: "development-regulations",
        heading: "Key Development Regulations to Know",
        body: [
          "These are the rules your layout plan must follow. Getting them right from the start avoids rejections and redesigns.",
          "Minimum plot size: varies by jurisdiction. In most Karnataka towns outside Bengaluru, the minimum is 1,200 sq ft (30x40 feet) for residential plots.",
          "Road widths: main internal roads must be at least 9 metres wide. Cross roads must be at least 6 metres. If the layout fronts a state highway, additional setbacks apply.",
          "Open space: at least 10% of the total layout area must be reserved as open space (parks, playgrounds). This is a civic amenity requirement, not optional.",
          "Civic amenity sites: larger layouts (typically above 2 acres) may need to reserve additional land for civic amenities like schools, community halls, or water tanks.",
          "Drainage and stormwater: the layout must include a drainage plan that connects to the existing storm water system or shows how runoff will be managed.",
          "These regulations exist to protect buyers and the public. A layout that meets them is also easier to sell, because buyers know it is properly planned.",
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common Mistakes That Delay Layout Approval",
        body: [
          "Applying before DC conversion is complete. Your RTC must show the converted land use before you apply. Submitting with an agricultural RTC is an automatic rejection.",
          "Using an unlicensed surveyor. The layout plan must be prepared by a professional with the right credentials. Plans from unqualified drafters are rejected outright.",
          "Ignoring road width requirements. Trying to squeeze in extra plots by narrowing roads is the fastest way to get your plan sent back.",
          "Not accounting for open space. Some developers try to minimize open space to maximize sellable area. The authority will catch this and require a redesign.",
          "Missing NOCs. If your land is near a forest, water body, highway, or industrial zone, you likely need specific NOCs. Find out which ones apply before you submit, not after.",
          "Not following up. Like any government process, regular follow-up keeps your file moving. Without it, approvals can stall for weeks at a time.",
        ],
      },
      {
        id: "layout-approval-vs-rera",
        heading: "Layout Approval vs RERA Registration",
        body: [
          "These are two different things, and you may need both.",
          "Layout approval is from the local planning authority. It says: this layout plan is approved, you can develop and sell these plots.",
          "RERA registration is with the Karnataka Real Estate Regulatory Authority. It says: this project is registered and buyers have legal protections under the Real Estate (Regulation and Development) Act, 2016.",
          "RERA registration is mandatory for plotted developments above the threshold size specified in Karnataka RERA rules. Even if your layout is below the threshold, voluntary RERA registration adds credibility and buyer confidence.",
          "You apply for RERA registration after getting layout approval. The RERA application requires the approved layout plan, title documents, and project details.",
        ],
      },
      {
        id: "after-approval",
        heading: "What Happens After Layout Approval?",
        body: [
          "Once you have layout approval, the next steps are infrastructure development and launch.",
          "Build the infrastructure. Roads, water supply, electricity, drainage, fencing, and boundary markers. The approval order may specify a timeline for completing infrastructure.",
          "Register the layout. Get the approved layout plan registered at the Sub-Registrar's office.",
          "Apply for RERA registration if applicable.",
          "Begin plot registrations. With the layout registered, individual plots can be registered and sold to buyers through proper sale deeds.",
          "Launch the project. Start marketing and sales. Having a properly approved and registered layout is your strongest selling point.",
        ],
      },
      {
        id: "how-agamana-helps",
        heading: "How Agamana Projects Helps with Layout Approval",
        body: [
          "We manage the entire approval process. From preparing the layout plan to filing the application, coordinating with the planning authority, handling modifications, and following up until the approval order is in your hands.",
          "We start with feasibility. Before drawing a single line, we check local regulations, confirm the right authority, and identify any NOCs you will need. This prevents surprises later.",
          "Our layout plans are designed for both approval and sales. We follow all development regulations while also planning a layout that buyers want: good road access, practical plot sizes, and well-placed amenities.",
          "We work across Sagara, Shivamogga, Sirsi, and the broader Karnataka region. We know the local authorities, their processes, and their expectations. That local knowledge saves time.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does layout approval take in Karnataka?",
        a: "Typically 2 to 6 months after DC conversion, depending on the planning authority, the size of the layout, and how complete your documents are. Clean applications with no modifications needed can clear in 2 to 3 months.",
      },
      {
        q: "Can I sell plots without layout approval?",
        a: "No. Selling plots from an unapproved layout is illegal under the Karnataka Town and Country Planning Act. Buyers cannot get loans, and the entire project is at legal risk.",
      },
      {
        q: "What is the minimum plot size for layout approval in Karnataka?",
        a: "In most jurisdictions outside Bengaluru, the minimum residential plot size is 1,200 sq ft (30x40 feet). Some authorities allow smaller plots in specific zones. Check with your local planning authority.",
      },
      {
        q: "Do I need DC conversion before layout approval?",
        a: "Yes. If your land is classified as agricultural, DC conversion must be completed first. Your RTC must show the converted (non-agricultural) land use before you can apply for layout approval.",
      },
      {
        q: "What is the difference between layout approval and building permission?",
        a: "Layout approval permits you to divide land into plots and sell them. Building permission is what individual plot buyers need when they want to construct a house. These are separate processes with different authorities.",
      },
      {
        q: "Is RERA registration required along with layout approval?",
        a: "RERA registration is mandatory for plotted developments above the threshold size under Karnataka RERA rules. Even smaller projects benefit from voluntary registration as it builds buyer confidence.",
      },
    ],
  },
  {
    slug: "agricultural-land-conversion-karnataka",
    title: "Agricultural Land Conversion in Karnataka: A Beginner's Guide (2025)",
    metaDescription:
      "Simple guide to converting agricultural land in Karnataka. Covers types of conversion, eligibility, documents, costs and step-by-step process for first-time land owners.",
    h1: "Agricultural Land Conversion in Karnataka for Beginners",
    intro:
      "You own agricultural land in Karnataka and want to use it for something other than farming. Maybe a residential layout. Maybe a commercial project. Maybe a farmstay. Whatever the plan, you first need to convert the land. This guide explains the basics: what conversion means, who needs it, what it costs, and how the process works. Written for land owners who are doing this for the first time.",
    publishedDate: "2025-08-03",
    updatedDate: "2025-08-03",
    readingTime: "10 min read",
    category: "Land Development",
    keyTakeaways: [
      "Agricultural land conversion (also called DC conversion or Section 95 conversion) changes your land's official classification from agricultural to non-agricultural.",
      "You need conversion before you can develop the land for residential, commercial, or industrial purposes.",
      "The process involves the Deputy Commissioner's office and typically takes 3 to 8 months.",
      "Costs include a government conversion fee (based on guidance value) plus documentation and professional charges.",
    ],
    sections: [
      {
        id: "what-is-agricultural-land-conversion",
        heading: "What is Agricultural Land Conversion?",
        body: [
          "In Karnataka, all land has an official classification recorded in the revenue records (RTC). Most land outside cities and towns is classified as agricultural. This classification controls what you can legally do with the land.",
          "Agricultural land conversion is the process of changing that classification. When you convert agricultural land to non-agricultural, you are getting official permission to use the land for purposes other than farming.",
          "This process is governed by Section 95 of the Karnataka Land Revenue Act, 1964. That is why you will sometimes hear it called \"Section 95 conversion.\" More commonly, it is called DC conversion because the Deputy Commissioner of your district is the authority who approves it.",
        ],
      },
      {
        id: "types-of-conversion",
        heading: "Types of Land Conversion",
        body: [
          "You do not just convert land generically. You convert it to a specific use. The most common types in Karnataka are:",
          "Agricultural to residential: the most common conversion for plotted layout development. Your land classification changes to allow residential use, which is the first step toward creating a layout and selling plots.",
          "Agricultural to commercial: for shops, offices, hotels, or commercial complexes. The conversion fee is usually higher than residential.",
          "Agricultural to industrial: for factories, warehouses, or manufacturing units. This may require additional clearances from the Pollution Control Board.",
          "Agricultural to mixed use: some projects combine residential and commercial use. The conversion application must specify this.",
          "The type of conversion you apply for must match your intended use. Converting to residential and then building a commercial project is a violation and can result in penalties.",
        ],
      },
      {
        id: "who-needs-conversion",
        heading: "Who Needs Agricultural Land Conversion?",
        body: [
          "You need conversion if two conditions are true. First, your land is classified as agricultural in the revenue records. Second, you want to use it for anything other than farming.",
          "This applies to all land sizes. Whether you own half an acre or 50 acres, the requirement is the same.",
          "You do not need conversion if your land is already classified as non-agricultural. Some land within city or town limits may already have non-agricultural status. Check your RTC extract on the Bhoomi portal. The classification is clearly stated.",
          "You also do not need conversion for purely agricultural activities like farming, horticulture, or sericulture, even on a commercial scale.",
        ],
      },
      {
        id: "eligibility",
        heading: "Eligibility: Can Your Land Be Converted?",
        body: [
          "Not all agricultural land qualifies for conversion. Here is what the authorities look at.",
          "Zone classification: your land must fall in a zone that permits the intended use. Land in forest zones, eco-sensitive areas, or restricted zones typically cannot be converted. Check with the local planning authority for the zonal map.",
          "Land use compatibility: the surrounding area's land use matters. Converting a small plot in the middle of active farmland to industrial use is unlikely to be approved.",
          "Legal status: the land must have clear title. No pending disputes, no court cases, no attachment orders. All mutations must be complete and reflected in the RTC.",
          "Agricultural productivity: highly productive agricultural land (irrigated, multi-crop) faces more scrutiny for conversion than dry land or barren land.",
          "If your land does not meet these criteria, the DC can reject your application. That is why a feasibility check before applying is important.",
        ],
      },
      {
        id: "documents-needed",
        heading: "Documents You Will Need",
        body: [
          "Here is a simplified checklist. Gather everything before you apply.",
          "RTC (Record of Rights, Tenancy and Crops): current extract from Bhoomi, not older than 6 months.",
          "Mutation extract: proves the land is in your name. If inherited, the mutation from the previous owner must be complete.",
          "Survey sketch and tippani: official map of your land from the Survey Department.",
          "Encumbrance Certificate (EC): from the Sub-Registrar's office, covering at least 13 years.",
          "Tax paid receipts: all land revenue and property tax must be cleared.",
          "Aadhaar card and PAN card: of all land owners listed in the RTC.",
          "Zonal certificate: from the local planning authority confirming your land can be used for the intended purpose.",
          "NOCs: No Objection Certificates from relevant departments (Forest, Pollution Control Board, Highway authority) depending on location.",
          "The exact list can vary slightly by district. When in doubt, check with the DC office in your district before filing.",
        ],
      },
      {
        id: "step-by-step-process",
        heading: "The Conversion Process, Step by Step",
        body: [
          "Step 1: Check your RTC. Download a fresh copy from the Bhoomi portal. Confirm the land classification, ownership details, and that mutations are complete. If anything is off, fix it before proceeding.",
          "Step 2: Get a feasibility opinion. Visit the local planning authority or consult a land development partner to confirm your land is eligible for the intended conversion. This saves you from applying and getting rejected.",
          "Step 3: Gather documents. Use the checklist above. Every document must be current, accurate, and in the names of all current owners.",
          "Step 4: File the application. Submit at the Deputy Commissioner's office in your district. You will pay an application fee at this stage.",
          "Step 5: Site inspection. The local Tahsildar or a revenue officer visits your land. They verify boundaries, check for encroachments, confirm ownership details, and assess whether the conversion is appropriate.",
          "Step 6: Tahsildar's report. Based on the inspection, the Tahsildar submits a report to the DC office with their recommendation.",
          "Step 7: DC order. If everything checks out, the Deputy Commissioner issues a conversion order specifying the new land use and any conditions.",
          "Step 8: Update your RTC. This is critical and often forgotten. After receiving the DC order, get your RTC updated through the Bhoomi portal or Tahsildar's office to reflect the new land classification. Your RTC must match the conversion order before you can proceed to layout planning or any development.",
        ],
      },
      {
        id: "costs-involved",
        heading: "What Does Conversion Cost?",
        body: [
          "The main government cost is the conversion fee, calculated as a percentage of the land's guidance value (jantri rate). The percentage varies based on the type of conversion.",
          "Residential conversion: typically the lowest rate. For most districts in Karnataka, expect to pay between ₹5,000 and ₹50,000 depending on the land area and its guidance value.",
          "Commercial conversion: higher rate than residential. The fee can be 2 to 3 times the residential rate for the same parcel.",
          "Industrial conversion: varies. May include additional charges for environmental clearances.",
          "Beyond the conversion fee, you will spend on document preparation (survey sketch, EC, zonal certificate), professional fees if you use a consultant or development partner, and any corrections needed in your land records (mutation fees, updated RTCs).",
          "Budget for the full cost upfront. Unexpected expenses during the process, like discovering a pending mutation or needing an additional NOC, are common.",
        ],
      },
      {
        id: "common-questions-beginners",
        heading: "Questions Every First-Time Land Owner Asks",
        body: [
          "Can I do this myself? You can. The process is not technically complex, just bureaucratically demanding. You will need to visit multiple offices (Bhoomi centre, Survey Department, Sub-Registrar, DC office), track your file through the system, and follow up regularly. Most first-timers underestimate how long the follow-up takes.",
          "What if I have joint ownership? All owners listed in the RTC must consent to the conversion. The application must include identity documents and signatures of every owner. One disagreeing co-owner can stall the entire process.",
          "Can I reverse a conversion? Technically yes, but it is rarely done. Once land is converted and developed, reversing it would mean demolishing whatever was built. Practically, conversion is a one-way decision.",
          "What if my application is rejected? You can reapply after addressing the reasons for rejection. Common rejection reasons include incomplete documents, land in a restricted zone, or unresolved ownership disputes. Fix the issue and resubmit.",
          "How is this different from NA (Non-Agricultural) order? Same thing, different name. DC conversion and NA order both refer to the process of changing land from agricultural to non-agricultural use. The terminology varies by state; in Karnataka, DC conversion is the common term.",
        ],
      },
      {
        id: "mistakes-to-avoid",
        heading: "Mistakes to Avoid as a Beginner",
        body: [
          "Starting without checking eligibility. Not every piece of land can be converted. A quick check with the local planning authority can save you months and money.",
          "Applying with outdated documents. Your RTC must be recent (within 6 months). Your EC must cover the required period. Outdated documents get rejected.",
          "Forgetting to update the RTC after conversion. The DC order alone is not enough. Your revenue records must reflect the new classification before you can do anything with the land.",
          "Ignoring co-owner consent. If multiple people own the land, all must agree. Sort this out at the start, not when the application is halfway through.",
          "Underestimating the timeline. Budget for 3 to 8 months minimum. Do not plan your project timeline assuming conversion will be done in 30 days. It will not.",
        ],
      },
      {
        id: "how-agamana-helps",
        heading: "How Agamana Projects Can Help",
        body: [
          "We handle agricultural land conversion as part of our end-to-end development service. For land owners doing this for the first time, we take care of the entire process.",
          "We start with a free feasibility check. We review your land records, check zoning, and tell you upfront whether conversion is possible and what it will involve.",
          "We prepare all documents, file the application, coordinate with the Tahsildar and DC office, and follow up until the order is issued.",
          "We also handle what comes after: updating your RTC, preparing for layout planning, and guiding you through the rest of the development process.",
          "We serve land owners across Sagara, Shivamogga, Sirsi, and 7+ districts in Karnataka. If you have agricultural land and a development idea, talk to us. The first conversation costs nothing.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between DC conversion and Section 95 conversion?",
        a: "They are the same thing. DC conversion refers to the Deputy Commissioner who approves it. Section 95 refers to the section of the Karnataka Land Revenue Act, 1964 that governs the process. Both terms are used interchangeably.",
      },
      {
        q: "How long does agricultural land conversion take?",
        a: "Typically 3 to 8 months in Karnataka. The timeline depends on how complete your documents are, which district you are in, and whether any complications arise during the process.",
      },
      {
        q: "Can agricultural land be converted to residential anywhere in Karnataka?",
        a: "No. The land must fall in a zone that permits residential development. Land in forest areas, eco-sensitive zones, or restricted areas cannot be converted. Check the zonal classification before applying.",
      },
      {
        q: "Is conversion required for building a farmhouse on agricultural land?",
        a: "It depends on the scale and purpose. A farmhouse for personal use on your own agricultural land may not require full conversion in some cases. But if you plan to sell plots or run a commercial venture, conversion is mandatory. Consult the local planning authority for your specific situation.",
      },
      {
        q: "What happens if I develop land without converting it first?",
        a: "You face legal penalties. Any construction or plot sale on unconverted agricultural land is illegal. The revenue department can issue demolition orders, impose fines, and the plot registrations can be challenged in court.",
      },
      {
        q: "Can NRIs apply for agricultural land conversion in Karnataka?",
        a: "NRIs who legally own agricultural land in Karnataka can apply for conversion. They will need to provide the same documents, plus a power of attorney if they cannot be present in person. The POA holder can manage the process on their behalf.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
