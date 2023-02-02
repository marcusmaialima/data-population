describe("Home Map", () => {
  it("should visit homepage route", () => {
    cy.visit("http://localhost:5173/")
  })

  it("should zoom in twice", () => {
    cy.visit("http://localhost:5173/")
    cy.get(".leaflet-control-zoom-in").click()
    cy.get(".leaflet-control-zoom-in").click()
  })

  it("should zoom out twice", () => {
    cy.visit("http://localhost:5173/")
    cy.get(".leaflet-control-zoom-out").click()
    cy.get(".leaflet-control-zoom-out").click()
  })

  it("should detect four polygons in map", () => {
    cy.visit("http://localhost:5173/")
    cy.get(".leaflet-zoom-animated>g>path").should(($p) => {
      expect($p).to.have.length(4)
    })
  })

  it("should click on the first polygon and detect the title in the graphic", () => {
    cy.visit("http://localhost:5173/")
    cy.get(".leaflet-interactive").eq(0).click()
    cy.get("text").contains("Jd. Colinas - Zona Oeste")
  })

  it("should click on the first polygon and detect two years in the graphic", () => {
    cy.visit("http://localhost:5173/")
    cy.get(".leaflet-interactive").eq(0).click()
    cy.get(
      "#reactgooglegraph-1>div>div>svg g:nth-child(4) path:nth-child(1)",
    ).trigger("mouseover")
    cy.get("#reactgooglegraph-1>div>div>svg g:nth-child(6) > text").contains(
      "2000",
    )
    cy.get(
      "#reactgooglegraph-1>div>div>svg g:nth-child(6) > text:nth-child(4)",
    ).contains("2006")
  })
})
