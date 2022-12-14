//import profilePicture from '../picture/profile.jpg';

export const PersonalInfo = ({userStateInfo}) => {
 
  return (
    <div className='personalInfo'>
      <div >
        <img src={userStateInfo?.pictureProfile} alt='profile' className='pictureProfile' />
      </div>
      <h1 className='personalName'>{userStateInfo?.name}</h1>
      <p className='personalJob'>{userStateInfo?.job}</p>
      
      <div className='container-pictureEmail'>
        <img className='pictureEmail' src="https://cdn-icons-png.flaticon.com/512/2183/2183000.png"/>
        <p className='personalEmail'>{userStateInfo?.email}</p>
      </div>
      <div className='container-picturePhone'>
        <img className='picturePhone' src='https://i.pinimg.com/originals/b0/10/64/b01064465d278ea8f2f0fc2b60ea9d6b.jpg'/>
        <p className='personalNumber'>{userStateInfo?.number}</p>
      </div>
      <p className='personalDescription'>{userStateInfo?.description}</p>  
    </div>
  )
}


