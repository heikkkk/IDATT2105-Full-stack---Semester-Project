let UUID = 0

/**
 * UniqueID is a utility function to generate unique identifiers.
 * It maintains an internal counter and provides a method to retrieve a new unique identifier each time it is called.
 */
export default function UniqueID () {

  /**
   * Returns a new unique identifier.
   * Each time this method is called, it increments the internal counter and returns new value.
   * @returns {number} A unique identifier.
   */
  const getID = () => {
    UUID++
    return UUID
  }

  // Returns the getID method for external use
  return {
    getID
  }
}
