


export default function About(props) {

   let MyStyle={
    
    color:props.Mode==="dark"?"white":"black",
    backgroundColor: props.Mode==="dark"?"#343a40":"white"
      
    
   }

    
    return ( 
        <div style={MyStyle}>
<div className="container" style={MyStyle}>
    <h1 >About Us</h1>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={MyStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Texties</strong>
      </button>
    </h2>
    <div style={MyStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Welcome to Texties!</strong> We're a website dedicated to helping you work with text more efficiently and effectively. Our easy-to-use tools allow you to count words, convert text to uppercase or lowercase, and more. Our goal is to make it easier for you to manage your text so that you can focus on what matters most. We're passionate about providing useful tools that can help you save time and effort, and we're always working on improving our website to meet your needs. Thanks for visiting Texties, and we hope you find our website helpful!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Our Mission</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
      At Texties, our mission is to provide you with easy-to-use tools that make working with text simpler and more efficient. We believe that text management should be accessible to everyone, and we're committed to providing high-quality, free tools that you can use whenever you need them. Whether you're a student, a writer, or just someone who works with text regularly, we hope that our website can make your life a little easier.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Our Team</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={MyStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Texties was created by a team of text enthusiasts who are passionate about making text management more accessible and user-friendly. Our team includes developers, designers, and writers who work together to create the tools and content you see on our website. We're committed to providing high-quality tools and resources that help you work with text more effectively, and we're always looking for ways to improve our website. If you have any feedback or suggestions for us, we'd love to hear from you!
      </div>
    </div>
  </div>
</div>
</div>
</div>
  
  )
}
