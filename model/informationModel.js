module.exports = (sequelize, DataTypes) => {
    const info = sequelize.define("info", {
      प्रति: {
        type: DataTypes.TEXT,
        
      },
      महानिदेशक: {
        type: DataTypes.STRING,
        
      },
      कलेजको_नाम : {
        type: DataTypes.TEXT,
        
      },
      पता: {
        type: DataTypes.TEXT,
        
      },
      मिति: {
        type: DataTypes.TEXT,
        
      },
      विषय: {
        type: DataTypes.TEXT,
        
      },
      तपाईंको_नाम: {
        type: DataTypes.TEXT,
        
      },
      कक्षा: {
        type: DataTypes.TEXT,
        
      },
      विषय : {
        type: DataTypes.TEXT,
        
      },
      रोल_नम्बर : {
        type: DataTypes.TEXT,
        
      },
     
      हालको_जन्म_मिति : {
        type: DataTypes.TEXT,
        
      },
      सही_जन्म_मिति : {
        type: DataTypes.TEXT,
      
      },
      सादर: {
        type: DataTypes.TEXT,
       
      },
      सम्पर्क_नम्बर: {
        type: DataTypes.TEXT,
        
      },
      इमेल_ठेगाना: {
        type: DataTypes.TEXT,
     
      },
      
      जिल्ला_खेलकुद_अधिकृत: {
        type: DataTypes.TEXT,
        
      },
      जिल्ला_खेलकुद_अधिकृत: {
        type: DataTypes.TEXT,
        
      },
      जिल्लाको_नाम: {
        type: DataTypes.TEXT,
      
      },
      संस्थाको_नाम: {
        type: DataTypes.TEXT,
        
      },
      गतिविधिको_विवरण : {
        type: DataTypes.TEXT,
        
      },
      सङ्ख्या: {
        type: DataTypes.TEXT,
        
      },
      स्थानीय_सरकारको_नाम_वडा_कार्यालय: {
        type: DataTypes.TEXT,
        
      },
      वडाको_नाम_वा_नम्बर: {
        type: DataTypes.TEXT,
        
      },
      वडानम्बर_वा_नगरको_नाम: {
        type: DataTypes.TEXT,
        
      },

    });
    return info;
  };