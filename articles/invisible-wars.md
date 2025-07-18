---
title: "invisible wars"
category: "interests"
date: "07-11-2025"
---

# Invisible Wars: China’s Cyber Siege

I’m not here to wave the flag of a new Cold War or paint China as the villain in a geopolitical thriller, but when lines are crossed, there must be consequences. The recent U.S. sanctions against Sichuan Juxinhe Network Technology Co., a Chinese cybersecurity firm linked to the Salt Typhoon hacking group, are a response to the cyberattacks that targeted American communication infrastructure. But I wouldn’t stop there. If we’re serious about protecting our digital borders, it’s time to consider broader sanctions against Chinese cyber firms tied to state sponsored espionage. This isn’t about fear-mongering but about accountability in a time where cyberwarfare is the new battlefield.

Since October 2024, I’ve been tracking updates on what I initially thought was an act of war. Cybersecurity news outlets circulated with details, yet mainstream media barely touched the story. Here’s what I’ve gathered since.

## The Salt Typhoon Storm

Salt Typhoon, a hacking group linked to China’s Ministry of State Security (MSS), is part of state-sponsored cyber operations. Among groups like Hafnium, Volt Typhoon, and Flax Typhoon, it targets infrastructure globally like U.S. telecoms or European government networks. These groups exploit vulnerabilities mainly in software but hardware as well (often outdated systems) to steal data, surveil, or prepare for disruptions. Salt Typhoon, in particular, focuses on telecom systems to intercept communications and gain leverage with confidential intelligence.

In January 2025, the U.S. Treasury Department sanctioned Sichuan Juxinhe and alleged hacker Yin Kecheng for their role in Salt Typhoon’s cyber espionage campaign. This group infiltrated major U.S. telecom carriers, intercepting communications of politicians, government officials, and much of the greater Washington metropolitan area. The hackers exploited vulnerabilities in network devices, some dating back to 2018, planting itself deep into systems and raising concerns about bad actors still stealing intelligence undetected.

These attacks aren’t isolated. Chinese state-sponsored groups have a history of targeting acute infrastructure like the incident with Microsoft Exchange servers in 2021 or vaccine research during the COVID-19 pandemic. These groups' ultimate goals extend beyond data theft to gain an edge in conflicts like Taiwan, U.S. foreign relations, or broader potential geopolitical tensions. The U.S. response has been to place sanctions on individual firms and hackers but to me, this feels insufficient given the scale of their attacks. 

## Details of the Hack

Salt Typhoon gained access to sensitive data within telecommunications networks, including call logs, unencrypted SMS messages, and compromised systems used for wiretaps, gaining intelligence on ongoing investigations and surveillance targets. Initial access manipulated vulnerabilities in public-facing applications (VPNs, firewalls, and exchange servers) and network devices, such as Cisco routers. They used stolen credentials to bypass defenses. Articles I've read mention exploiting known but unpatched Cisco vulnerabilities like CVE-2023-20198 and CVE-2018-0171 in Cisco IOS XE software. Once Salt Typhoon gained access, they seem to have relied on "living off the land" (L-O-T-L) techniques, using system tools like PowerShell and WMIC, and deployed custom malware like the JumbledPath utility to capture network traffic and delete logs. To maintain their access in exfiltrating data and evade detection, Salt Typhoon deployed custom backdoors like GhostSpider and Demodex to route communication through internal proxy servers, blending their malicious traffic with legitimate appearing network activity. GhostSpider, for example, is loaded using DLL hijacking, registered as a service via regsvr32.exe, and uses encryption for communication, operating mostly in memory. They were also observed capturing network protocol traffic to steal additional credentials and modifying network configurations to ensure access and hinder forensic analysis and investigation.

## Why the Average Person Doesn’t Feel the Impact Yet

Here’s the tricky part: these cyberattacks don’t make headlines in major news outlets. Americans didn’t wake up to frozen phones or leaked texts on the dark web. The average person isn’t directly affected, which is why Salt Typhoon hasn’t dominated the news cycle like a celebrity’s new workout fad or the latest twist in Ohtani’s contract saga. But I wouldn't be lulled into complacency because our telecom infrastructure is the invisible backbone of daily life.

Nine U.S. telecom giants and data center providers, including Comcast, Verizon, AT&T, T-Mobile, and others, were compromised. Hackers gained access to systems that route calls, texts, and internet traffic. Not only is this a corporate issue but a national security threat. This allows foreign actors to eavesdrop on sensitive government exchanges or disrupt services during a crisis. Even if the effects are not immediately visible to the public, the ripple effects could be calamitous. So just because there a lack of flashy news coverage doesn't mean there isn't a threat. That just means it's insidious and operating undetected. 

## China’s Response

China’s Ministry of State Security (MSS) and defense apparatus deny involvement in the cyberattacks, accusing the U.S. of fabricating claims to justify sanctions and suppress Chinese tech firms. Beijing counters by alleging U.S. cyberattacks on Chinese institutions, like those during the Asian Winter Games. Even so, the evidence piles up: Sichuan Juxinhe’s ties to Salt Typhoon, Xu Zewei’s arrest in Italy for Hafnium links, and i-Soon’s role in a hacker-for-hire ecosystem all point to state-backed operations.

This isn't to say the U.S. is innocent of cyber operations because every major power plays the game. But the scale of PRC-associated attacks demand a response that is beyond retaliatory sanctions.

## Step Into the Rink U.S. We Need to Sanction All China’s Cyber Proxies

Sanctioning Sichuan Juxinhe is a start, but it’s like firing a plasma torpedo at a Gorn ship (basically a temporary diversion and insufficient). Many Chinese cyber firms act as proxies for the state, blurring the lines between private enterprise and government espionage. Companies like Shanghai Powerock and i-Soon have been implicated in similar schemes, using contractors to mask MSS involvement. By targeting only specific firms, it's like we’re stuck slugging it out with Tyler Durden when you really want to be talking strategy with Billy Beane.

Broader sanctions on Chinese cyber firms suspected of state ties would send a clear message: there’s a price for crossing the line, and we're not afraid to enforce it. This isn’t about punishing every Chinese company but about deterring those from enabling espionage that threatens U.S. security. The U.S. has already banned telecom giants like Huawei from its networks. This move was followed by allies like Canada. Extending this to cybersecurity firms could disrupt the PRC’s ability to outsource cyber operations and stop private entities from working with hacking groups to protect U.S. infrastructure.

## The Holistic Picture

Sanctions alone won’t solve the problem. Rivalry in technology fuels espionage, and severing from China won’t stop hackers. The U.S. need to invest in stronger encryption, regular software updates, and public-private partnerships to detect and evict intruders. The Cybersecurity and Infrastructure Security Agency (CISA) has been notifying victims of Salt Typhoon breaches, but the possibility of hackers still embedded in our systems just shows how much damage has been done.

This is not about pragmatism. The Empire must be stopped! The U.S. needs to protect its telecoms, data centers, and government networks and hold those accountable for threatening national security.

### Minor Notes

- Flat Typhoon: China organized hacking group that targets Taiwanese organization's networks
- Volt Typhoon: focuses on U.S. prepositioning in critical infrastructure especially operational tech (OT) for long-term access to networks for espionage 
> targets: energy, water, transportation, communications, manufacturing, maritime government, information technology, and education sectors
- Salt Typhoon: specializes in gathering intelligence and intellectual property (eg. meta data and wiretap data from major ISPs)
> targets: government agencies, hotels, and telecommunication
- Hafnium: operates from virtual private sectors (VPS) in the U.S. and specializes in industry sectors
> targets: infectious disease researchers, law firms, higher education institutions, defense contractors, policy think tanks, and NGOs