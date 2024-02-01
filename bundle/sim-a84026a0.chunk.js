import{dG as t,A as e,dT as a,dH as s,df as l,eb as n,q as i,bz as r,bA as o,a as d,P as c,aa as p,dn as S,c as u,o as f,ab as m,S as I,j as g,C as A,aq as P,a$ as h}from"./detailed_results-50fb450f.chunk.js";import{j as b,m as v,a as H,r as k,b as M,T as w,s as O,I as R}from"./preset_utils-e791bfd5.chunk.js";const E=b({fieldName:"aura",values:[{value:t.NoPaladinAura,tooltip:"No Aura"},{actionId:e.fromSpellId(54043),value:t.RetributionAura}]}),T=b({fieldName:"seal",values:[{actionId:e.fromSpellId(42463),value:a.Vengeance},{actionId:e.fromSpellId(20154),value:a.Righteousness},{actionId:e.fromSpellId(20424),value:a.Command,showWhen:t=>t.getTalents().sealOfCommand}],changeEmitter:t=>t.changeEmitter}),C=b({fieldName:"judgement",values:[{actionId:e.fromSpellId(20355),value:s.JudgementOfWisdom},{actionId:e.fromSpellId(20271),value:s.JudgementOfLight}]}),y={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:67485}}}},{action:{castSpell:{spellId:{spellId:48806}}}},{action:{castSpell:{spellId:{spellId:53408}}}},{action:{castSpell:{spellId:{spellId:35395}}}},{action:{castSpell:{spellId:{spellId:53385}}}},{action:{condition:{auraIsActive:{auraId:{spellId:53488}}},castSpell:{spellId:{spellId:48801}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:48819}}}}]},j=v("Blank",{items:[]}),x=H("Default",y),B={name:"Aura Mastery",data:l.create({talentsString:"050501-05-05232051203331302133231331"})},U={name:"Divine Sacrifice & Guardian",data:l.create({talentsString:"03-453201002-05222051203331302133201331"})},W=n.create({aura:t.RetributionAura,judgement:s.JudgementOfWisdom}),D=i.create({flask:r.FlaskUnknown,food:o.FoodUnknown}),N=k(I.SpecRetributionPaladin,{cssClass:"retribution-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[d.StatStrength,d.StatAgility,d.StatIntellect,d.StatMP5,d.StatAttackPower,d.StatMeleeHit,d.StatMeleeCrit,d.StatMeleeHaste,d.StatExpertise,d.StatArmorPenetration,d.StatSpellPower,d.StatSpellCrit,d.StatSpellHit,d.StatSpellHaste],epPseudoStats:[c.PseudoStatMainHandDps],epReferenceStat:d.StatAttackPower,displayStats:[d.StatStrength,d.StatAgility,d.StatIntellect,d.StatMP5,d.StatAttackPower,d.StatMeleeHit,d.StatMeleeCrit,d.StatMeleeHaste,d.StatExpertise,d.StatArmorPenetration,d.StatSpellHaste,d.StatSpellPower,d.StatSpellCrit,d.StatSpellHit,d.StatMana,d.StatHealth],defaults:{gear:j.gear,epWeights:M.fromMap({[d.StatStrength]:2.53,[d.StatAgility]:1.13,[d.StatIntellect]:.15,[d.StatSpellPower]:.32,[d.StatSpellHit]:.41,[d.StatSpellCrit]:.01,[d.StatSpellHaste]:.12,[d.StatMP5]:.05,[d.StatAttackPower]:1,[d.StatMeleeHit]:1.96,[d.StatMeleeCrit]:1.16,[d.StatMeleeHaste]:1.44,[d.StatArmorPenetration]:.76,[d.StatExpertise]:1.8},{[c.PseudoStatMainHandDps]:7.33}),consumes:D,talents:B.data,specOptions:W,raidBuffs:p.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:S.TristateEffectImproved,manaSpringTotem:S.TristateEffectRegular,battleShout:S.TristateEffectImproved,trueshotAura:!0}),partyBuffs:u.create({}),individualBuffs:f.create({blessingOfKings:!0,blessingOfMight:S.TristateEffectImproved}),debuffs:m.create({judgementOfWisdom:!0,judgementOfLight:!0,curseOfElements:!0,exposeArmor:S.TristateEffectImproved,sunderArmor:!0,faerieFire:!0,curseOfWeakness:S.TristateEffectRegular})},playerIconInputs:[E,C,T],includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[w,O]},encounterPicker:{showExecuteProportion:!1},presets:{rotations:[x],talents:[B,U],gear:[j]},autoRotation:()=>x.rotation.rotation,raidSimPresets:[{spec:I.SpecRetributionPaladin,tooltip:"Retribution Paladin",defaultName:"Retribution",iconUrl:g(A.ClassPaladin,2),talents:B.data,specOptions:W,consumes:D,defaultFactionRaces:{[P.Unknown]:h.RaceUnknown,[P.Alliance]:h.RaceHuman,[P.Horde]:h.RaceUnknown},defaultGear:{[P.Unknown]:{},[P.Alliance]:{1:j.gear},[P.Horde]:{1:j.gear}}}]});class F extends R{constructor(t,e){super(t,e,N)}}export{F as R};
//# sourceMappingURL=sim-a84026a0.chunk.js.map
