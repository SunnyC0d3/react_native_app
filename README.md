# Aora React Native App

A custom built app that uses React Native and Expo to develop mobile applications. This application provides the ability to upload thumbnails and videos as a logged in user, with the ability to search and view the videos using a horizontal and vertical scroller.

![Alt text](/screenshots/readme-img-1.png?raw=true "Screenshot 1")
![Alt text](/screenshots/readme-img-2.png?raw=true "Screenshot 2")
![Alt text](/screenshots/readme-img-3.png?raw=true "Screenshot 3")
![Alt text](/screenshots/readme-img-4.png?raw=true "Screenshot 4")
![Alt text](/screenshots/readme-img-5.png?raw=true "Screenshot 5")
![Alt text](/screenshots/readme-img-6.png?raw=true "Screenshot 6")
![Alt text](/screenshots/readme-img-7.png?raw=true "Screenshot 7")

## Installation

1. Sign up to Appwrite on - https://cloud.appwrite.io/.
2. Make sure to then create the following on appwrite -
```bash
Databases: 

User Collection - 

. title: Required, String
. thumbnail: Required, Url
. prompt: Required, String
. video: Required, Url
. creator: Relationship with creator

Settings -> Permissions -> Any -> All Permissions

Videos Collection - 

. username: String
. email: Email
. avatar: Url
. accountId: String

Settings -> Permissions -> Users -> All Permissions
Indexes -> { key: search_by_title, type: fulltext, attributes: title, asc/desc: asc }

Storage:

Permissions -> Users -> All Permissions
Permissions -> Guests -> Read Only

Allowed Extensions -> jpg, png, gif, mp4, jpeg

```
3. Make sure to collect all the **IDs** and add it to your local **.env.local** file
4. Make sure to then run the following
```bash
npm install
npx expo start
```