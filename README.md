# Aora React Native App

A custom built app that uses React Native and Expo to develop mobile applications. This application provides the ability to upload thumbnails and videos as a logged in user, with the ability to search and view the videos using a horizontal and vertical scroller.

![Alt text](/screenshots/readme-img-1.PNG "Screenshot 1" =100x20))
![Alt text](/screenshots/readme-img-2.PNG "Screenshot 2" =100x20))
![Alt text](/screenshots/readme-img-3.PNG "Screenshot 3" =100x20))
![Alt text](/screenshots/readme-img-4.PNG "Screenshot 4" =100x20))
![Alt text](/screenshots/readme-img-5.PNG "Screenshot 5" =100x20))
![Alt text](/screenshots/readme-img-6.PNG "Screenshot 6" =100x20))
![Alt text](/screenshots/readme-img-7.PNG "Screenshot 7" =100x20))

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