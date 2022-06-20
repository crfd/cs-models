import { Contact } from './Contact'
import { Hazard } from './Hazard'

/**
 * On every confined space a company has to perform a hazard assessment to
 * determine the risk of the space. What has to be addressed by the assessment
 * is defined by the OCSH in subsection 11.03.
 */
export interface Assessment {
  /**
   * A assessment is only valid for 3 years. After that time the hazards have to
   * be reassesed by a qualified person
   */
  performedAt: Date

  /**
   * The persons that performed the hazard assessment. The assessment is only to
   * be performed by a qualified and properly trained person
   */
  performedBy: Contact[]

  /** Any hazards that have been identified by the assessment. */
  hazards: Hazard[]
}
