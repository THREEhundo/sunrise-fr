/**
 * 1. Define input parameters:
 *
 * current_timezone
 * destination_timezone
 * days_before_travel
 * travel_direction
 * usual_bedtime
 * sunrise_time (e.g., "06:00")
 *
 * 2. Calculate time difference between current and destination time zones.
 *
 * 3. Create a schedule adjustment plan:
 *		 If traveling east, adjust sleep and wake times earlier.
 *
 *		 If traveling west, adjust sleep and wake times later.
 *
 * 4. Create light exposure plan:
 * 		For eastward travel, get morning light exposure starting from sunrise or as early as possible up to 10 AM.
 * 		For westward travel, get afternoon light exposure.
 *
 * 5. Create a hydration and caffeine/alcohol plan:
 * 		Drink water regularly.
 * 		Avoid alcohol and caffeine close to bedtime.
 *
 * 6. Create an adaptation plan for local time upon arrival:
 * 		Follow local meal and sleep times immediately.
 * 		Output an array of objects with instructions for each day before flying and for the day of landing.
 *  */

/*** PSEUDO CODE
 * function calculateAdjustedTime(usual_time, adjustment_hours) {
 *     try {
 *         const time = new Date("1970-01-01T" + usual_time + ":00Z");
 *         const adjusted_time = new Date(time.getTime() + adjustment_hours * 60 * 60 * 1000);
 *         return adjusted_time.toISOString().substring(11, 16);
 *     } catch (error) {
 *         console.error("Error in calculating adjusted time:", error);
 *         return null;
 *     }
 * }
 * function getTimeDifference(destination_timezone_offset) {
 *     try {
 *         const home_timezone_offset = new Date().getTimezoneOffset() / 60;
 *         return destination_timezone_offset - home_timezone_offset;
 *     } catch (error) {
 *         console.error("Error in calculating time difference:", error);
 *         return null;
 *     }
 * }
 * function generateJetLagPlan(destination_timezone_offset, days_before_travel, travel_direction, usual_bedtime, sunrise_time) {
 *     let time_difference;
 *     try {
 *         time_difference = getTimeDifference(destination_timezone_offset);
 *         if (time_difference === null) throw new Error("Invalid time difference calculation");
 *     } catch (error) {
 *         console.error("Error in getting time difference:", error);
 *         return { error: "Failed to calculate time difference. Please check your inputs." };
 *     }
 *     const daily_adjustment = travel_direction === "east" ? -1 : 1;
 *     let plan = [];
 *     try {
 *         if (Math.abs(time_difference) <= 1) {
 *             plan.push({
 *                 day: "Minimal time zone difference",
 *                 message: "No significant adjustment needed due to minimal time zone difference.",
 *                 hydration_plan: "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *             });
 *         } else {
 *             for (let day = 1; day <= days_before_travel; day++) {
 *                 const adjustment_hours = daily_adjustment * day;
 *                 const adjusted_bedtime = calculateAdjustedTime(usual_bedtime, adjustment_hours);
 *                 const adjusted_wakeup_time = calculateAdjustedTime(usual_bedtime, adjustment_hours + 8);
 *                 if (adjusted_bedtime === null || adjusted_wakeup_time === null) {
 *                     throw new Error("Invalid time adjustment calculation");
 *                 }
 *                 let light_exposure = `Get 10-30 minutes of sunlight starting from ${sunrise_time} to at latest 10:00.`;
 *                 if (travel_direction === "east") {
 *                     const adjusted_sunrise_time = calculateAdjustedTime(sunrise_time, adjustment_hours);
 *                     if (adjusted_sunrise_time === null) {
 *                         throw new Error("Invalid sunrise time adjustment calculation");
 *                     }
 *                     light_exposure = `Get 10-30 minutes of sunlight starting from ${adjusted_sunrise_time} to at latest 10:00.`;
 *                 } else {
 *                     light_exposure = "Get 10-30 minutes of sunlight in the afternoon.";
 *                 }
 *                 plan.push({
 *                     day: `Day ${day} before departure`,
 *                     sleep_adjustment: `Go to bed at ${adjusted_bedtime}.`,
 *                     wakeup_time: `Wake up at ${adjusted_wakeup_time}.`,
 *                     light_exposure: light_exposure,
 *                     hydration_plan: "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *                 });
 *             }
 *             plan.push({
 *                 day: "Day of arrival",
 *                 adaptation_plan: "Upon arrival, follow local meal and sleep times. Stay awake until local bedtime even if you feel tired.",
 *                 light_exposure: `Get 10-30 minutes of sunlight starting from ${sunrise_time} to at latest 10:00.`,
 *                 hydration_plan: "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *             });
 *         }
 *     } catch (error) {
 *         console.error("Error in generating jet lag plan:", error);
 *         return { error: "Failed to generate jet lag plan. Please check your inputs and try again." };
 *     }
 *     return plan;
 * }
 *
 *  Example Usage
 *
 * const destination_timezone_offset = 0; // GMT
 * const days_before_travel = 3;
 * const travel_direction = "east";
 * const usual_bedtime = "22:00";
 * const sunrise_time = "06:00";
 * const plan = generateJetLagPlan(destination_timezone_offset, days_before_travel, travel_direction, usual_bedtime, sunrise_time);
 * console.log(plan);
 *
 */

/** EXAMPLE OUTPUT
 * [
 *     {
 *         "day": "Day 1 before departure",
 *         "sleep_adjustment": "Go to bed at 21:00.",
 *         "wakeup_time": "Wake up at 05:00.",
 *         "light_exposure": "Get 10-30 minutes of sunlight starting from 05:00 to at latest 10:00.",
 *         "hydration_plan": "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *     },
 *     {
 *         "day": "Day 2 before departure",
 *         "sleep_adjustment": "Go to bed at 20:00.",
 *         "wakeup_time": "Wake up at 04:00.",
 *         "light_exposure": "Get 10-30 minutes of sunlight starting from 04:00 to at latest 10:00.",
 *         "hydration_plan": "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *     },
 *     {
 *         "day": "Day 3 before departure",
 *         "sleep_adjustment": "Go to bed at 19:00.",
 *         "wakeup_time": "Wake up at 03:00.",
 *         "light_exposure": "Get 10-30 minutes of sunlight starting from 03:00 to at latest 10:00.",
 *         "hydration_plan": "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *     },
 *     {
 *         "day": "Day of arrival",
 *         "adaptation_plan": "Upon arrival, follow local meal and sleep times. Stay awake until local bedtime even if you feel tired.",
 *         "light_exposure": "Get 10-30 minutes of sunlight starting from 06:00 to at latest 10:00.",
 *         "hydration_plan": "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *     }
 * ]
 *
 */

/*** MINIMAL TIME ZONE DIFFERENCE
 * [
 *     {
 *         "day": "Minimal time zone difference",
 *         "message": "No significant adjustment needed due to minimal time zone difference.",
 *         "hydration_plan": "Drink plenty of water and avoid alcohol and caffeine close to bedtime."
 *     }
 * ]
 *
 */
