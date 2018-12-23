---
title: "LARA - Automated Administration Assistant"
slug: "/lara"
date: "2018-02-21"
imagesrc: "lara/cover.jpg"
---

Throughout my time in ITC Learning, I have completely redeveloped their website, and became their resident JavaScript and PHP expert. When the Managing Director expressed interest in an ‘ecommerce platform’, it became apparent that what was really needed was a system that could automate the yearly renewal process for the software licences we sold. Due to the systems we use internally, it was apparent that this would need to be custom software.

LARA, or Licence and Renewals assistant, is comprised of two parts. The worker and the admin area.

The worker is a script that runs every day, that makes an API call to the CRM to see if there are any licences that are 90 days from expiry. If there are, LARA will commit that to her database and send automated reminder emails to the client every 30 days. The client can then click a link in the email to be taken to a payment gateway where the transaction can be processed. LARA will then send a thank you email and invoice.

The admin area allows a team member of ITC Learning to login with their Office 365 ID, to see the status of the renewals in progress and make changes to the system.

This project was my first major software development project, and allowed me to learn more about API calls, environment variables and more benefits of using Git.

![LARA](http://files.nathansimpson.design/portfolio/lara/hero.png)
