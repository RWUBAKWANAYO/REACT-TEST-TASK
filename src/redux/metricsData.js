import MetricsData from ".././metrics_data/MetricsData.json";
const NEW_REQUEST = "NEW_REQUEST";

const metrics = [];
// function to handle last hour's data
export const LastHourFunc = () => {
  const res = {
    info: {
      avg_price: MetricsData.data[0].avg_price_last_hour,
      bookings_current: {
        name: "last hour",
        value: MetricsData.data[0].bookings_current_last_hour,
      },
      bookings_previous: {
        name: "last week last hour",
        value: MetricsData.data[0].bookings_previous_last_hour,
      },
      clicks_current: {
        name: "last hour",
        value: MetricsData.data[0].clicks_current_last_hour,
      },
      clicks_previous: {
        name: "last week last hour",
        value: MetricsData.data[0].clicks_previous_last_hour,
      },
      ctr: MetricsData.data[0].ctr_last_hour,
      searches_current: {
        name: "last hour",
        value: MetricsData.data[0].searches_current_last_hour,
      },
      searches_previous: {
        name: "last week last hour",
        value: MetricsData.data[0].searches_previous_last_hour,
      },
      str: MetricsData.data[0].str_last_hour || 0,
    },
    metrics: {
      error_percent: MetricsData.data[0].errors_last_hour || 0,
      zeroes: MetricsData.data[0].zeroes_last_hour || 0,
      timeout: MetricsData.data[0].timeout_last_hour || 0,
      errors: MetricsData.errors_last_hour,
    },
  };
  return { type: NEW_REQUEST, payload: res };
};

// function to handle last 3 day's data
export const LastThreeDaysFunc = () => {
  const res = {
    info: {
      avg_price: MetricsData.data[0].avg_price_last_3days,
      bookings_current: {
        name: "last three days",
        value: MetricsData.data[0].bookings_current_last_3days,
      },
      bookings_previous: {
        name: "last week last three days",
        value: MetricsData.data[0].bookings_previous_last_3days,
      },
      clicks_current: {
        name: "last three days",
        value: MetricsData.data[0].clicks_current_last_3days,
      },
      clicks_previous: {
        name: "last week last three days",
        value: MetricsData.data[0].clicks_previous_last_3days,
      },
      ctr: MetricsData.data[0].ctr_last_3days,
      searches_current: {
        name: "last three days",
        value: MetricsData.data[0].searches_current_last_3days,
      },
      searches_previous: {
        name: "last week last three days",
        value: MetricsData.data[0].searches_previous_last_3days,
      },
      str: MetricsData.data[0].str_last_3days || 0,
    },
    metrics: {
      error_percent: MetricsData.data[0].errors_last_3days || 0,
      zeroes: MetricsData.data[0].zeroes_last_3days || 0,
      timeout: MetricsData.data[0].timeout_last_3days || 0,
      errors: MetricsData.errors_last_3days,
    },
  };
  return { type: NEW_REQUEST, payload: res };
};

// function to handle yesterday's data
export const YesterdayFunc = () => {
  const res = {
    info: {
      avg_price: MetricsData.data[0].avg_price_yesterday,
      bookings_current: {
        name: "today",
        value: MetricsData.data[0].bookings_current_yesterday,
      },
      bookings_previous: {
        name: "last week today",
        value: MetricsData.data[0].bookings_previous_yesterday,
      },
      clicks_current: {
        name: "today",
        value: MetricsData.data[0].clicks_current_yesterday,
      },
      clicks_previous: {
        name: "last week today",
        value: MetricsData.data[0].clicks_previous_yesterday,
      },
      ctr: MetricsData.data[0].ctr_yesterday,
      searches_current: {
        name: "today",
        value: MetricsData.data[0].searches_current_yesterday,
      },
      searches_previous: {
        name: "last week today",
        value: MetricsData.data[0].searches_previous_yesterday,
      },
      str: MetricsData.data[0].str_yesterday || 0,
    },
    metrics: {
      error_percent: MetricsData.data[0].errors_yesterday || 0,
      zeroes: MetricsData.data[0].zeroes_yesterday || 0,
      timeout: MetricsData.data[0].timeout_yesterday || 0,
      errors: MetricsData.errors_yesterday,
    },
  };
  return { type: NEW_REQUEST, payload: res };
};

// project reducer
const MetricsReducer = (state = metrics, action) => {
  switch (action.type) {
    case NEW_REQUEST:
      return {
        info: action.payload.info,
        metrics: {
          ...action.payload.metrics,
          total_count: action.payload.metrics.errors.reduce(
            (init, curr) => init + curr.count,
            0
          ),
        },
      };
    default:
      return state;
  }
};

export default MetricsReducer;
