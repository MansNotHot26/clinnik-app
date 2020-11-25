export const showNotification = () => {
    const notification = new Notification('Welcome to the Clinikk EduTech App',{body:'We have several courses on discount, Limited Offer! Click here to enroll.'})
    notification.onclick = (e) => {
        notification.close()
    }
}

export const showCourseNotification = () => {
    const notification = new Notification('Welcome to the Clinikk EduTech App',{body:'Appologies! This component is still under development. We will notify you once it is available.  '})
    notification.onclick = (e) => {
        notification.close()
    }
}


if(Notification.permission === 'granted') {

    showNotification()
 

}

else if(Notification.permission!=='denied') {
    Notification.requestPermission().then(permission =>{
        if(permission === 'granted') {
        showNotification()
        }
    })
}