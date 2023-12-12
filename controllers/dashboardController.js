const dashboardController = {

    dashboard: (req, res) => {
      res.render("dashboard",{title:"dashboard"});
    }
  
  }
  
  module.exports = dashboardController;