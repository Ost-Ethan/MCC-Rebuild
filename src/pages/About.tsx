import "./About.css";

export default function About() {
  return (
    <div className="background-image">
      <section className="about-heading-section">
        <div className="about-heading-text">
          <h2>A Team of Owners</h2>
          <p>
            What makes MCC stand out from other cleaning companies in
            Massachusetts is that we are employee-owned. When you do business
            with us, you are directly supporting our cleaners and community.
          </p>
          <button className="btn">CONTACT US &rsaquo;</button>
        </div>
      </section>
      <section className="about-caring-section">
        <div className="about-caring-text">
          <h2>Caring About Every Clean</h2>
          <p>
            As employee-owners, each MCC team member is trained in providing a
            best-in-class cleaning service to every one of our many facilities
            in the New England area. This means from your initial call for a
            quote to each clean you have with us, every interaction is with an
            owner of the company.
          </p>
          <button className="btn">CALL FOR A QUOTE &rsaquo;</button>
        </div>
      </section>      
    </div>
  );
}
