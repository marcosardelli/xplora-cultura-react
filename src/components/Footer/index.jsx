import PrivacyPolicyModal from "./PrivacyPolicyModal"
import TermsConditionsModal from "./TermsConditions"
import ContactModal from "./ContactModal"

export default function Footer() {
    return(
        <footer className="bg-secondary-subtle py-4">
        <div className="container text-center">
          <p>© 2024 Eventos Culturales. Todos los derechos reservados.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <PrivacyPolicyModal/>
            </li>
            <li className="list-inline-item">
              <TermsConditionsModal/>
            </li>
            <li className="list-inline-item">
              <ContactModal/>
            </li>
          </ul>
        </div>
    
        
      </footer>
    )
}