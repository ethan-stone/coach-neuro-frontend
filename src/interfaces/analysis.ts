/**
 * Interface for an analysis
 *
 * @param {string} id The id of the analysis
 * @param {string} owner The id of the user that created this analysis
 * @param {string} analysisName The name the user gave this analysis
 * @param {analysisCategory} analysisCategory The category of this analysis (basketball front etc.)
 * @param {string} videoPath The path to the video file in storage
 * @param {string} poses The id of the document that contains the poses for this analysis
 */
export default interface Analysis {
  id?: string;
  owner: string;
  analysisName: string;
  analysisCategory: string;
  videoPath: string;
  poses: string;
}
