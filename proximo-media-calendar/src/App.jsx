import React, { useState } from 'react';

const initialCampaigns = [
  // Tequila Programs
  { id: 1, brand: 'Jose Cuervo', campaign: 'Margarita Season', budget: 900000, startDate: '2026-04-27', endDate: '2026-09-07', category: 'tequila' },
  { id: 2, brand: 'Jose Cuervo', campaign: 'Nascar', budget: 250000, startDate: '2026-01-01', endDate: '2026-12-31', category: 'tequila', ongoing: 'Aligned to Races' },
  { id: 3, brand: 'Jose Cuervo', campaign: 'UFC', budget: 350000, startDate: '2026-01-01', endDate: '2026-12-31', category: 'tequila', ongoing: 'Aligned to PPV' },
  { id: 4, brand: '1800 Tequila', campaign: 'Taste of Victory', budget: 150000, startDate: '2026-01-26', endDate: '2026-02-08', category: 'tequila' },
  { id: 5, brand: '1800 Tequila', campaign: 'Taste of Victory', budget: 150000, startDate: '2026-09-01', endDate: '2026-11-01', category: 'tequila' },
  { id: 6, brand: '1800 Tequila', campaign: 'Elevate Your Summer', budget: 800000, startDate: '2026-04-27', endDate: '2026-09-07', category: 'tequila' },
  { id: 7, brand: '1800 Tequila', campaign: 'Holiday', budget: 400000, startDate: '2026-11-09', endDate: '2026-12-31', category: 'tequila' },
  { id: 8, brand: 'Prepared Cocktails', campaign: 'RTD (Margarita Season)', budget: 200000, startDate: '2026-04-27', endDate: '2026-09-07', category: 'tequila' },
  { id: 9, brand: 'Prepared Cocktails', campaign: 'RTS (Margarita Season)', budget: 150000, startDate: '2026-04-27', endDate: '2026-09-07', category: 'tequila' },
  { id: 10, brand: 'Prepared Cocktails', campaign: 'High-proof (Margarita Season)', budget: 100000, startDate: '2026-04-27', endDate: '2026-09-07', category: 'tequila' },
  { id: 11, brand: 'Gran Coramino', campaign: 'Black History Month', budget: 150000, startDate: '2026-02-01', endDate: '2026-02-28', category: 'tequila' },
  { id: 12, brand: 'Gran Coramino', campaign: 'Eagles', budget: 50000, startDate: '2026-09-01', endDate: '2026-11-01', category: 'tequila' },
  { id: 13, brand: 'Gran Coramino', campaign: 'Kevin Hart Tour (TBD)', budget: 100000, startDate: '2026-06-01', endDate: '2026-08-31', category: 'tequila', tbd: true },
  { id: 14, brand: 'Gran Centenario', campaign: 'Summer of Futbol', budget: 300000, startDate: '2026-05-01', endDate: '2026-07-31', category: 'tequila' },
  { id: 15, brand: 'Gran Centenario', campaign: 'Holiday', budget: 200000, startDate: '2026-11-09', endDate: '2026-12-31', category: 'tequila' },
  // Whiskey Programs
  { id: 16, brand: 'Pendleton', campaign: "Father's Day", budget: 75000, startDate: '2026-06-01', endDate: '2026-06-21', category: 'whiskey' },
  { id: 17, brand: 'Pendleton', campaign: 'Outdoor Grilling', budget: 325000, startDate: '2026-05-18', endDate: '2026-09-07', category: 'whiskey' },
  { id: 18, brand: 'Pendleton', campaign: 'Holiday', budget: 200000, startDate: '2026-11-09', endDate: '2026-12-31', category: 'whiskey' },
  // Vodka & Rum Programs
  { id: 19, brand: 'Kraken', campaign: 'Summer', budget: 200000, startDate: '2026-05-18', endDate: '2026-09-07', category: 'vodka-rum' },
  { id: 20, brand: 'Kraken', campaign: 'Halloween', budget: 100000, startDate: '2026-09-08', endDate: '2026-10-31', category: 'vodka-rum' },
  { id: 21, brand: 'Three Olives', campaign: 'Summer', budget: 70000, startDate: '2026-05-18', endDate: '2026-09-07', category: 'vodka-rum' },
];

const months = [
  { name: 'January', short: 'JAN', days: 31 },
  { name: 'February', short: 'FEB', days: 28 },
  { name: 'March', short: 'MAR', days: 31 },
  { name: 'April', short: 'APR', days: 30 },
  { name: 'May', short: 'MAY', days: 31 },
  { name: 'June', short: 'JUN', days: 30 },
  { name: 'July', short: 'JUL', days: 31 },
  { name: 'August', short: 'AUG', days: 31 },
  { name: 'September', short: 'SEP', days: 30 },
  { name: 'October', short: 'OCT', days: 31 },
  { name: 'November', short: 'NOV', days: 30 },
  { name: 'December', short: 'DEC', days: 31 },
];

const brandColors = {
  'Jose Cuervo': { bg: '#C5A572', text: '#1a1a1a' },
  '1800 Tequila': { bg: '#2D4A3E', text: '#ffffff' },
  'Prepared Cocktails': { bg: '#8B5A2B', text: '#ffffff' },
  'Gran Coramino': { bg: '#4A1C40', text: '#ffffff' },
  'Gran Centenario': { bg: '#1E3A5F', text: '#ffffff' },
  'Pendleton': { bg: '#5C4033', text: '#ffffff' },
  'Kraken': { bg: '#1a1a1a', text: '#ffffff' },
  'Three Olives': { bg: '#4A7C59', text: '#ffffff' },
};

const categoryInfo = {
  tequila: { label: 'Tequila Programs', accent: '#C5A572' },
  whiskey: { label: 'Whiskey Programs', accent: '#8B5A2B' },
  'vodka-rum': { label: 'Vodka & Rum Programs', accent: '#4A7C59' },
};

export default function App() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [hoveredCampaign, setHoveredCampaign] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const totalDays = 365;

  const getDayOfYear = (dateStr) => {
    const date = new Date(dateStr);
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  const getMonthStart = (monthIndex) => {
    let day = 0;
    for (let i = 0; i < monthIndex; i++) {
      day += months[i].days;
    }
    return day;
  };

  const getCampaignPosition = (campaign) => {
    const startDay = getDayOfYear(campaign.startDate);
    const endDay = getDayOfYear(campaign.endDate);
    const left = ((startDay - 1) / totalDays) * 100;
    const width = ((endDay - startDay + 1) / totalDays) * 100;
    return { left: `${left}%`, width: `${width}%` };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startStr = `${start.getMonth() + 1}/${start.getDate()}`;
    const endStr = `${end.getMonth() + 1}/${end.getDate()}`;
    return `${startStr}-${endStr}`;
  };

  const handleLogin = () => {
    if (password === 'proximo2026') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setPassword('');
      setLoginError('');
    } else {
      setLoginError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setEditingCampaign(null);
  };

  const handleSave = (updatedCampaign) => {
    setCampaigns(campaigns.map(c => c.id === updatedCampaign.id ? updatedCampaign : c));
    setEditingCampaign(null);
  };

  const filteredCampaigns = selectedCategory === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.category === selectedCategory);

  const groupedCampaigns = {
    tequila: filteredCampaigns.filter(c => c.category === 'tequila'),
    whiskey: filteredCampaigns.filter(c => c.category === 'whiskey'),
    'vodka-rum': filteredCampaigns.filter(c => c.category === 'vodka-rum'),
  };

  const getTotalBudget = (category) => {
    const cats = category === 'all' ? campaigns : campaigns.filter(c => c.category === category);
    return cats.reduce((sum, c) => sum + c.budget, 0);
  };

  const getBarWidth = (campaign) => {
    const startDay = getDayOfYear(campaign.startDate);
    const endDay = getDayOfYear(campaign.endDate);
    return ((endDay - startDay + 1) / totalDays) * 100;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      fontFamily: "'Playfair Display', Georgia, serif",
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Noise texture overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Header */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)',
        borderBottom: '1px solid rgba(197, 165, 114, 0.3)',
        padding: '20px 40px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1800px',
          margin: '0 auto',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              <h1 style={{
                fontSize: '28px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                margin: 0,
                background: 'linear-gradient(135deg, #C5A572 0%, #D4B896 50%, #C5A572 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
              }}>
                Proximo Spirits
              </h1>
              <span style={{
                fontSize: '12px',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}>
                2026 Media Calendar
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              padding: '12px 20px',
              background: 'rgba(197, 165, 114, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(197, 165, 114, 0.2)',
            }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif" }}>Total Budget</span>
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#C5A572' }}>
                {formatCurrency(getTotalBudget(selectedCategory))}
              </div>
            </div>
            
            {isAdmin ? (
              <button
                onClick={handleLogout}
                style={{
                  padding: '12px 24px',
                  background: 'transparent',
                  border: '1px solid rgba(197, 165, 114, 0.5)',
                  color: '#C5A572',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(197, 165, 114, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Exit Admin Mode
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #C5A572 0%, #A08050 100%)',
                  border: 'none',
                  color: '#1a1a1a',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(197, 165, 114, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div style={{
        padding: '20px 40px',
        background: 'rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: '1800px',
          margin: '0 auto',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          {[
            { key: 'all', label: 'All Programs' },
            { key: 'tequila', label: 'Tequila' },
            { key: 'whiskey', label: 'Whiskey' },
            { key: 'vodka-rum', label: 'Vodka & Rum' },
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              style={{
                padding: '10px 20px',
                background: selectedCategory === cat.key 
                  ? 'linear-gradient(135deg, #C5A572 0%, #A08050 100%)'
                  : 'rgba(255,255,255,0.05)',
                border: selectedCategory === cat.key 
                  ? 'none'
                  : '1px solid rgba(255,255,255,0.1)',
                color: selectedCategory === cat.key ? '#1a1a1a' : '#ffffff',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                fontWeight: selectedCategory === cat.key ? '600' : '400',
                transition: 'all 0.3s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main style={{
        padding: '40px',
        maxWidth: '1800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Month Headers */}
        <div style={{
          display: 'flex',
          marginBottom: '8px',
          marginLeft: '180px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
        }}>
          {months.map((month, i) => (
            <div
              key={month.name}
              style={{
                width: `${(month.days / totalDays) * 100}%`,
                padding: '16px 0',
                textAlign: 'center',
                borderRight: i < 11 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
              }}
            >
              <span style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                color: '#C5A572',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}>
                {month.short}
              </span>
            </div>
          ))}
        </div>

        {/* Calendar Sections */}
        {Object.entries(groupedCampaigns).map(([category, categoryCampaigns]) => {
          if (selectedCategory !== 'all' && selectedCategory !== category) return null;
          if (categoryCampaigns.length === 0) return null;

          return (
            <div key={category} style={{ marginBottom: '40px' }}>
              {/* Section Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
                paddingLeft: '8px',
              }}>
                <div style={{
                  width: '4px',
                  height: '24px',
                  background: categoryInfo[category].accent,
                  borderRadius: '2px',
                }} />
                <h2 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: categoryInfo[category].accent,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {categoryInfo[category].label}
                </h2>
                <span style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {formatCurrency(categoryCampaigns.reduce((sum, c) => sum + c.budget, 0))}
                </span>
              </div>

              {/* Campaign Rows */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflow: 'hidden',
              }}>
                {categoryCampaigns.map((campaign, index) => {
                  const barWidth = getBarWidth(campaign);
                  const isWideBar = barWidth > 15;
                  
                  return (
                    <div
                      key={campaign.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderBottom: index < categoryCampaigns.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        background: hoveredCampaign === campaign.id ? 'rgba(197, 165, 114, 0.05)' : 'transparent',
                        transition: 'background 0.2s ease',
                      }}
                      onMouseEnter={() => setHoveredCampaign(campaign.id)}
                      onMouseLeave={() => setHoveredCampaign(null)}
                    >
                      {/* Brand Name Only */}
                      <div style={{
                        width: '180px',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        borderRight: '1px solid rgba(255,255,255,0.05)',
                        flexShrink: 0,
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: brandColors[campaign.brand]?.bg || '#333',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: '13px',
                          fontWeight: '500',
                          color: '#ffffff',
                          fontFamily: "'Inter', sans-serif",
                        }}>
                          {campaign.brand}
                        </span>
                        {isAdmin && (
                          <button
                            onClick={() => setEditingCampaign({...campaign})}
                            style={{
                              marginLeft: 'auto',
                              padding: '4px 8px',
                              background: 'rgba(197, 165, 114, 0.2)',
                              border: 'none',
                              borderRadius: '3px',
                              color: '#C5A572',
                              fontSize: '10px',
                              cursor: 'pointer',
                              fontFamily: "'Inter', sans-serif",
                              flexShrink: 0,
                            }}
                          >
                            Edit
                          </button>
                        )}
                      </div>

                      {/* Timeline */}
                      <div style={{
                        flex: 1,
                        height: '70px',
                        position: 'relative',
                        background: 'rgba(0,0,0,0.2)',
                      }}>
                        {/* Month grid lines */}
                        {months.map((month, i) => (
                          <div
                            key={i}
                            style={{
                              position: 'absolute',
                              left: `${(getMonthStart(i) / totalDays) * 100}%`,
                              top: 0,
                              bottom: 0,
                              width: '1px',
                              background: 'rgba(255,255,255,0.05)',
                            }}
                          />
                        ))}

                        {/* Campaign bar with full details */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '44px',
                            borderRadius: '6px',
                            background: `linear-gradient(135deg, ${brandColors[campaign.brand]?.bg || '#333'} 0%, ${brandColors[campaign.brand]?.bg || '#333'}dd 100%)`,
                            boxShadow: hoveredCampaign === campaign.id 
                              ? `0 4px 20px ${brandColors[campaign.brand]?.bg || '#333'}66`
                              : '0 2px 8px rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 12px',
                            transition: 'all 0.3s ease',
                            cursor: isAdmin ? 'pointer' : 'default',
                            overflow: 'hidden',
                            border: `1px solid ${brandColors[campaign.brand]?.bg || '#333'}`,
                            ...getCampaignPosition(campaign),
                          }}
                          onClick={() => isAdmin && setEditingCampaign({...campaign})}
                        >
                          <div style={{
                            display: 'flex',
                            flexDirection: isWideBar ? 'row' : 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: isWideBar ? '12px' : '2px',
                            width: '100%',
                            textAlign: 'center',
                          }}>
                            {/* Campaign Name */}
                            <span style={{
                              fontSize: isWideBar ? '12px' : '10px',
                              fontWeight: '600',
                              color: brandColors[campaign.brand]?.text || '#fff',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              fontFamily: "'Inter', sans-serif",
                              maxWidth: isWideBar ? '40%' : '100%',
                            }}>
                              {campaign.campaign}
                            </span>
                            
                            {isWideBar && (
                              <span style={{
                                color: brandColors[campaign.brand]?.text || '#fff',
                                opacity: 0.4,
                              }}>|</span>
                            )}
                            
                            {/* Budget */}
                            <span style={{
                              fontSize: isWideBar ? '11px' : '9px',
                              fontWeight: '500',
                              color: brandColors[campaign.brand]?.text || '#fff',
                              opacity: 0.9,
                              whiteSpace: 'nowrap',
                              fontFamily: "'Inter', sans-serif",
                            }}>
                              {formatCurrency(campaign.budget)}
                            </span>
                            
                            {isWideBar && (
                              <span style={{
                                color: brandColors[campaign.brand]?.text || '#fff',
                                opacity: 0.4,
                              }}>|</span>
                            )}
                            
                            {/* Flight Dates */}
                            <span style={{
                              fontSize: isWideBar ? '10px' : '8px',
                              fontWeight: '400',
                              color: brandColors[campaign.brand]?.text || '#fff',
                              opacity: 0.8,
                              whiteSpace: 'nowrap',
                              fontFamily: "'Inter', sans-serif",
                            }}>
                              {formatDateRange(campaign.startDate, campaign.endDate)}
                            </span>
                          </div>
                        </div>

                        {/* Tooltip for narrow bars */}
                        {hoveredCampaign === campaign.id && !isWideBar && (
                          <div style={{
                            position: 'absolute',
                            top: '-60px',
                            left: getCampaignPosition(campaign).left,
                            background: 'rgba(0,0,0,0.95)',
                            border: '1px solid rgba(197, 165, 114, 0.3)',
                            borderRadius: '6px',
                            padding: '10px 14px',
                            zIndex: 100,
                            minWidth: '200px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                          }}>
                            <div style={{ fontSize: '12px', fontWeight: '600', color: '#C5A572', marginBottom: '4px' }}>
                              {campaign.campaign}
                            </div>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontFamily: "'Inter', sans-serif" }}>
                              {formatCurrency(campaign.budget)} • {formatDateRange(campaign.startDate, campaign.endDate)}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <p style={{
          fontSize: '11px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.1em',
          margin: 0,
          fontFamily: "'Inter', sans-serif",
        }}>
          © 2026 Proximo Spirits. Please drink responsibly.
        </p>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid rgba(197, 165, 114, 0.3)',
            width: '100%',
            maxWidth: '400px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '8px',
              color: '#C5A572',
              textAlign: 'center',
              letterSpacing: '0.1em',
            }}>
              Admin Access
            </h3>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
              marginBottom: '24px',
              fontFamily: "'Inter', sans-serif",
            }}>
              Enter password to edit campaigns
            </p>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              placeholder="Password"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '14px',
                marginBottom: '16px',
                outline: 'none',
                fontFamily: "'Inter', sans-serif",
                boxSizing: 'border-box',
              }}
            />
            {loginError && (
              <p style={{
                color: '#e74c3c',
                fontSize: '12px',
                marginBottom: '16px',
                textAlign: 'center',
                fontFamily: "'Inter', sans-serif",
              }}>
                {loginError}
              </p>
            )}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setPassword('');
                  setLoginError('');
                }}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogin}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'linear-gradient(135deg, #C5A572 0%, #A08050 100%)',
                  border: 'none',
                  color: '#1a1a1a',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingCampaign && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid rgba(197, 165, 114, 0.3)',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '24px',
              color: '#C5A572',
              textAlign: 'center',
              letterSpacing: '0.1em',
            }}>
              Edit Campaign
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Brand
                </label>
                <select
                  value={editingCampaign.brand}
                  onChange={e => setEditingCampaign({...editingCampaign, brand: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                >
                  {Object.keys(brandColors).map(brand => (
                    <option key={brand} value={brand} style={{ background: '#1a1a1a' }}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Campaign Name
                </label>
                <input
                  type="text"
                  value={editingCampaign.campaign}
                  onChange={e => setEditingCampaign({...editingCampaign, campaign: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Budget
                </label>
                <input
                  type="number"
                  value={editingCampaign.budget}
                  onChange={e => setEditingCampaign({...editingCampaign, budget: Number(e.target.value)})}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{
                    display: 'block',
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={editingCampaign.startDate}
                    onChange={e => setEditingCampaign({...editingCampaign, startDate: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{
                    display: 'block',
                    fontSize: '11px',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    End Date
                  </label>
                  <input
                    type="date"
                    value={editingCampaign.endDate}
                    onChange={e => setEditingCampaign({...editingCampaign, endDate: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Category
                </label>
                <select
                  value={editingCampaign.category}
                  onChange={e => setEditingCampaign({...editingCampaign, category: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#ffffff',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="tequila" style={{ background: '#1a1a1a' }}>Tequila Programs</option>
                  <option value="whiskey" style={{ background: '#1a1a1a' }}>Whiskey Programs</option>
                  <option value="vodka-rum" style={{ background: '#1a1a1a' }}>Vodka & Rum Programs</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button
                onClick={() => setEditingCampaign(null)}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#ffffff',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleSave(editingCampaign)}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'linear-gradient(135deg, #C5A572 0%, #A08050 100%)',
                  border: 'none',
                  color: '#1a1a1a',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
